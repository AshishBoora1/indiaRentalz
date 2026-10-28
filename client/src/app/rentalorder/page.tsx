import { ChevronRight } from "lucide-react";
import Link from "next/link";
import JotformEmbed from "../components/common/JotformEmbed";

export default function Page() {
  return (
    <main>
      <div className="py-10 lg:pt-5 lg:pb-18.5">
        <div className="container">
          <h2 className="mb-2 text-text-primary capitalize">Rental Orders</h2>

          <div className="mb-10 flex items-center gap-2">
            <Link
              href="/"
              className="text-sm font-bold capitalize text-brand-dark"
            >
              Home
            </Link>

            <ChevronRight size={16} className="text-brand-dark" />

            <Link
              href="/rentalorder"
              aria-current="page"
              className="page-link relative text-sm capitalize text-gray-500"
            >
              Rental Orders
            </Link>
          </div>

          <JotformEmbed
            formId="233462494181458"
            title="Rental Order"
          />
        </div>
      </div>
    </main>
  );
}