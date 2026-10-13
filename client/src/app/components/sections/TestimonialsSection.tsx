"use client";

import React from "react";
import Image from "next/image";
import { testimonials } from "@/app/data/DummyData";

function TestimonialsSection() {
  return (
    <div className=" my-28">
      <div className="items-info mb-8 text-center sm:mb-10">
        <h2>What Our Clients Say</h2>
        <p>
          Trusted by startups, enterprises, and growing businesses across India.
        </p>
      </div>

      {/* Testimonials Grid / Mobile Slider */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <article
            key={testimonial.id}
            className="flex h-full flex-col rounded-xl border border-card-border bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(0,0,0,0.12)] sm:p-6"
          >
            {/* Client Information */}
            <div className="mb-5 flex items-center gap-4">
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-card-border bg-card">
                <Image
                  src={testimonial.image}
                  alt={testimonial.clientName}
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </div>

              <div className="min-w-0">
                <h3 className="truncate text-base font-bold text-text-primary">
                  {testimonial.clientName}
                </h3>

                <p className="mt-1 text-sm text-text-muted">
                  {testimonial.designation}
                </p>
              </div>
            </div>

            {/* Rating */}
            <div
              className="mb-4 flex items-center gap-1 text-xl leading-none"
              aria-label={`${testimonial.rating} out of 5 stars`}
            >
              {Array.from({ length: 5 }, (_, index) => (
                <span
                  key={index}
                  className={
                    index < testimonial.rating
                      ? "text-[#f4c430]"
                      : "text-gray-300"
                  }
                  aria-hidden="true"
                >
                  ★
                </span>
              ))}
            </div>

            {/* Review */}
            <p className="flex-1 text-sm leading-7 text-text-secondary sm:text-base">
              “{testimonial.review}”
            </p>

            {/* Footer */}
            <div className="mt-5 border-t border-gray-100 pt-4">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-dark">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-card text-xs text-brand-dark">
                  ✓
                </span>
                Verified Customer
              </span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default TestimonialsSection;
