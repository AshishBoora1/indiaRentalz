
"use client";

import { Suspense } from "react";
import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

function LayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const hideHeaderFooter =
    pathname === "/enterprise" ||
    pathname.startsWith("/enterprise/");

  return (
    <>
      {!hideHeaderFooter && <Header />}

      {children}

      {!hideHeaderFooter && <Footer />}
    </>
  );
}

export default function ConditionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense fallback={children}>
      <LayoutContent>{children}</LayoutContent>
    </Suspense>
  );
}
