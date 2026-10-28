import Link from "next/link";
import { ShoppingCart, ArrowRight } from "lucide-react";

function EmptyCart() {
  return (
    <div className="container flex min-h-[65vh] items-center justify-center pt-6 pb-12">
      <div className="w-full max-w-2xl rounded-2xl border border-card-border bg-white px-5 py-12 text-center shadow-[0_8px_30px_#88272f0a] sm:px-10 sm:py-16">
        <div className="mx-auto mb-6 flex size-20 items-center justify-center rounded-full bg-[#fff2f2] text-brand-dark">
          <ShoppingCart size={36} strokeWidth={1.6} />
        </div>

        <h1 className="font-poppins text-2xl font-semibold text-text-primary sm:text-3xl">
          Your Cart is Empty
        </h1>

        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-text-muted sm:text-base">
          Looks like you haven&apos;t added anything to your cart yet. Explore
          our products and find the right technology for your needs.
        </p>

        <Link
          href="/shop"
          className="btn-primary mt-8 inline-flex items-center justify-center gap-2 rounded-lg py-3 normal-case transition-colors duration-200 hover:bg-brand"
        >
          Start Exploring
          <ArrowRight size={18} />
        </Link>

        <p className="mt-5 text-xs text-text-muted">
          Find the right devices for your rental needs.
        </p>
      </div>
    </div>
  );
}

export default EmptyCart;
