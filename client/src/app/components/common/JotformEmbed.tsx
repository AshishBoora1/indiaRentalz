"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { LoaderCircle, RefreshCw } from "lucide-react";

type JotformEmbedProps = {
  formId: string;
  title: string;
};

export default function JotformEmbed({ formId, title }: JotformEmbedProps) {
  const formRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<number | null>(null);
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

    const showError = () => {
      if (!isMounted) return;

      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      setIsLoading(false);
      setHasError(true);
    };

    const handleIframeLoad = () => {
      if (!isMounted) return;

      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      setIsLoading(false);
      setHasError(false);
    };

    timeoutRef.current = window.setTimeout(showError, 30000);

    const script = document.createElement("script");

    const observer = new MutationObserver(() => {
      const iframe = container.querySelector("iframe");

      if (iframe) {
        iframe.addEventListener("load", handleIframeLoad, { once: true });
        observer.disconnect();
      }
    });

    container.innerHTML = "";

    observer.observe(container, {
      childList: true,
      subtree: true,
    });

    script.src = `https://form.jotform.com/jsform/${formId}`;
    script.async = true;
    script.addEventListener("error", showError);

    container.appendChild(script);

    return () => {
      isMounted = false;
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      observer.disconnect();

      script.removeEventListener("error", showError);
      script.remove();

      const iframe = container.querySelector("iframe");
      iframe?.removeEventListener("load", handleIframeLoad);

      container.innerHTML = "";
    };
  }, [formId, retryKey]);

  return (
    <div className="w-full">
      {isLoading && !hasError && (
        <div
          className="flex min-h-75 flex-col items-center justify-center gap-3 text-center"
          role="status"
          aria-live="polite"
        >
          <LoaderCircle className="animate-spin text-brand" size={36} />
          <p className="text-sm text-color-text-muted">
            Loading {title} form...
          </p>
        </div>
      )}

      {hasError && (
        <div
          className="flex min-h-75 flex-col items-center justify-center gap-4 rounded-xl border border-(--color-border) bg-white p-6 text-center"
          role="alert"
        >
          <p className="text-base font-semibold text-(--color-text)">
            We couldn&apos;t load the form.
          </p>

          <p className="text-sm text-color-text-muted">
            Please check your internet connection and try again.
          </p>

          <button
            type="button"
            onClick={loadForm}
            className="btn-primary inline-flex items-center gap-2 px-5 py-2.5"
          >
            <RefreshCw size={16} />
            Try Again
          </button>
        </div>
      )}

      <div
        ref={formRef}
        className={hasError ? "hidden" : "w-full"}
        aria-label={title}
      />
    </div>
  );
}
