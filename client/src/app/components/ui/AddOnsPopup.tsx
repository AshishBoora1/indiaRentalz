"use client";
import { useState } from "react";
import Image from "next/image";
import { X, ShoppingCart } from "lucide-react";
import { AddOnsPopupProps } from "@/app/utils/interface/props.types";
import { useRouter } from "next/navigation";

export default function AddOnsPopup({
  addons,
  onClose,
  onContinue,
}: AddOnsPopupProps) {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const router = useRouter();

  const toggleAddon = (id: number) => {
    setSelectedIds((current) =>
      current.includes(id)
        ? current.filter((selectedId) => selectedId !== id)
        : [...current, id],
    );
  };

  const handleContinue = () => {
    const selectedAddons = addons.filter((addon) =>
      selectedIds.includes(addon.id),
    );
    router.push("/cart");
    onContinue(selectedAddons);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#000000b3] sm:p-5"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="addons-title"
        className="relative flex max-md:self-end self-center max-md:rounded-b-none max-h-[90vh] md:max-h-[70vh] w-full max-w-225 flex-col overflow-hidden rounded-2xl bg-white shadow-2xl py-6 md:px-10 px-6"
      >
        {/* Header */}
        <div className="relative shrink-0 px-8 pb-6 text-center md:-mx-5">
          <h2
            id="addons-title"
            className=" font-roboto! text-xl font-semibold! text-text-primary sm:text-2xl!"
          >
            Choose Add-ons
          </h2>

          <p className="mt-2 text-base font-medium text-[#6c757d] mb-4">
            Select any additional items you&apos;d like to add to your cart
          </p>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close add-ons popup"
            className="absolute top-0 right-0 flex size-7 items-center justify-center rounded-full bg-brand-dark text-white transition-colors hover:bg-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-dark"
          >
            <X size={17} />
          </button>
        </div>

        {/* Scrollable Add-ons */}
        <div className="min-h-0 flex-1 overflow-y-auto px-1 sm:px-2">
          {addons.length === 0 ? (
            <p className="py-10 text-center text-sm text-text-muted">
              No add-ons available at the moment.
            </p>
          ) : (
            <div className="flex flex-col gap-4 md:gap-8">
              {addons.map((addon, i) => {
                const isSelected = selectedIds.includes(addon.id);

                return (
                  <article
                    key={i}
                    className="flex gap-4 rounded-lg bg-[#fff8f8] pe-4 pt-4 pb-2 transition-all duration-300 hover:-translate-y-0.5 hover:border-card-border hover:shadow-[0_4px_12px_#00000012] md:gap-4 md:p-4"
                  >
                    {/* Product Image */}
                    <div className="relative flex aspect-square h-28 shrink-0 items-center justify-center overflow-hidden rounded-md bg-[#e3f2fd]">
                      <Image
                        className=" object-contain h-full w-full"
                        src={addon.image}
                        alt={addon.product_name}
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex min-w-0 flex-1 flex-col justify-between gap-3">
                      <div>
                        <h3 className="text-sm! leading-5 font-semibold! text-text-primary sm:text-base!">
                          {addon.product_name}
                        </h3>

                        {addon.product_desc && (
                          <p className="mt-1 line-clamp-2 text-xs leading-5 text-[#6c757d] sm:text-sm">
                            {addon.product_desc}
                          </p>
                        )}
                      </div>

                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <p className="text-sm font-semibold text-brand sm:text-base">
                          Rs. {addon.price}/mo
                        </p>

                        <button
                          type="button"
                          onClick={() => toggleAddon(addon.id)}
                          aria-pressed={isSelected}
                          className={`min-w-25 rounded border  cursor-pointer px-3 py-1 text-xs font-medium transition-all duration-300 sm:min-w-25 sm:text-sm ${
                            isSelected
                              ? "border-brand-dark bg-brand-dark text-white hover:bg-brand"
                              : "border-brand-dark/50 bg-transparent text-brand-dark hover:bg-brand-dark hover:text-white"
                          }`}
                        >
                          {isSelected ? "Remove" : "Add"}
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>

        {/* Fixed Footer */}
        <div className="shrink-0 border-t border-card-border bg-white pt-4">
          <button
            type="button"
            onClick={handleContinue}
            className="flex w-full items-center justify-center gap-2 bg-brand-dark px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-dark cursor-pointer"
          >
            <ShoppingCart size={17} />
            Continue
            {selectedIds.length > 0 && (
              <span>({selectedIds.length} selected)</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
