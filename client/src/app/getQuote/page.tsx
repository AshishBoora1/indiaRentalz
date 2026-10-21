"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronRight, LoaderCircle, RefreshCw } from "lucide-react";
import Link from "next/link";

const JOTFORM_SCRIPT = "https://form.jotform.com/jsform/220244771811450";

export default function Page() {
  const formRef = useRef<HTMLDivElement>(null);

  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [retryKey, setRetryKey] = useState(0);

  const loadForm = useCallback(() => {
    setIsLoading(true);
    setHasError(false);
    setRetryKey((prev) => prev + 1);
  }, []);

  useEffect(() => {
    const container = formRef.current;

    if (!container) return;

    let isMounted = true;
    let timeoutId: ReturnType<typeof setTimeout>;

    container.innerHTML = "";

    const script = document.createElement("script");

    script.src = JOTFORM_SCRIPT;
    script.type = "text/javascript";
    script.async = true;

    const handleLoad = () => {
      // Script load hone ke baad bhi form render hone mein
      // thoda time lag sakta hai.
      timeoutId = setTimeout(() => {
        if (isMounted) {
          setIsLoading(false);
        }
      }, 800);
    };

    const handleError = () => {
      if (!isMounted) return;

      clearTimeout(timeoutId);
      setIsLoading(false);
      setHasError(true);
    };

    script.addEventListener("load", handleLoad);
    script.addEventListener("error", handleError);

    container.appendChild(script);

    // Agar script network ki wajah se bahut der le.
    timeoutId = setTimeout(() => {
      if (!isMounted) return;

      setIsLoading(false);
      setHasError(true);
    }, 30000);

    return () => {
      isMounted = false;
      clearTimeout(timeoutId);

      script.removeEventListener("load", handleLoad);
      script.removeEventListener("error", handleError);

      script.remove();
      container.innerHTML = "";
    };
  }, [retryKey]);

  return (
    <main>
      <div className="py-10 lg:pt-5 lg:pb-18.5">
        <div className="container">
          <h2 className="mb-2 text-text-primary">Get Quick Quote</h2>

          <div className="mb-10 flex items-center gap-2">
            <Link
              href="/"
              className="text-sm font-bold capitalize text-brand-dark"
            >
              Home
            </Link>

            <ChevronRight size={16} className="text-brand-dark" />

            <Link
              href="/getQuote"
              aria-current="page"
              className="relative text-sm capitalize text-gray-500 page-link"
            >
              Get Quote
            </Link>
          </div>

          <div className="relative min-h-100">
            {isLoading && (
              <div
                className="absolute inset-0 z-10 flex min-h-100 flex-col items-center justify-center gap-3 bg-white"
                role="status"
                aria-live="polite"
              >
                <LoaderCircle
                  size={42}
                  className="animate-spin text-brand-dark"
                />

                <p className="text-sm text-text-secondary">
                  Loading quote form...
                </p>
              </div>
            )}

            {hasError && (
              <div
                className="flex min-h-100flex-col items-center justify-center gap-4 text-center"
                role="alert"
              >
                <p className="text-text-primary">
                  Form load nahi ho paya. Please try again.
                </p>

                <button
                  type="button"
                  onClick={loadForm}
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <RefreshCw size={16} />
                  Try Again
                </button>
              </div>
            )}

            <div ref={formRef} className={hasError ? "hidden" : "w-full"} />
          </div>
        </div>
      </div>
    </main>
  );
}
