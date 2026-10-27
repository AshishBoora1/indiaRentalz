"use client";
import "../css/faqs.css";
import "../css/commonpolicypages.css";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { faqData } from "../data/aboutFaqData";

function Page() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenFaq((currentId) => (currentId === id ? null : id));
  };

  return (
    <main>
      <section>
        <div className="py-10 lg:py-18.5">
          <div className="max-w-275 mx-auto px-3">
            <div className="bg-[linear-gradient(135deg,#fff3f3,#ffe7e9)] border border-(--color-delivery-border) rounded-[18px] p-7.5 text-center">
              <div className="md:w-9/12 mx-auto">
                <h6 className="font-roboto! text-(--color-light-accent)">
                  Technology Without Ownership
                </h6>

                <h1 className="my-2.5 text-(--color-accent) font-roboto!">
                  Frequently Asked Questions
                </h1>

                <p className="text-text-muted">
                  Everything you need to know about renting technology from
                  IndiaRentalz — from selecting the right equipment and
                  completing documentation to delivery, support, upgrades,
                  returns and enterprise deployments.
                </p>
              </div>
            </div>

            <div>
              {faqData.map((section) => (
                <div key={section.title}>
                  <div className="bg-(--color-delivery-highlight) border-l-4 border-l-(--color-accent) rounded-lg py-3.5 px-4 text-(--color-accent) mt-7.5 mb-3">
                    <h3>{section.title}</h3>
                  </div>

                  {section.faqs.map((faq) => {
                    const faqId = `${section.title}-${faq.question}`;
                    const isOpen = openFaq === faqId;

                    return (
                      <div
                        key={faqId}
                        className={`mb-2.5 border rounded-[10px] transition-all duration-300 ease-in-out ${
                          isOpen
                            ? "bg-(--bg-clr-card) border-(--color-delivery-border) shadow-[0_4px_14px_#8b1f270f]"
                            : "border-(--color-faqs-border-main) bg-white "
                        }`}
                      >
                        <button
                          type="button"
                          onClick={() => toggleFaq(faqId)}
                          aria-expanded={isOpen}
                          aria-controls={`faq-answer-${faqId}`}
                          className="w-full cursor-pointer py-3.5 px-4 flex items-center justify-between gap-4 text-left"
                        >
                          <h5
                            className={`${isOpen ? "text-(--color-accent)" : "text-(--color-text-dark)"} leading-[1.45] font-roboto!`}
                          >
                            {faq.question}
                          </h5>

                          <span
                            className={`shrink-0 border flex items-center justify-center rounded-full p-1 transition-all duration-300 ease-in-out ${
                              isOpen
                                ? "bg-(--color-light-accent) text-white border-(--color-light-accent) rotate-180"
                                : "bg-(--color-delivery-highlight) text-(--color-light-accent) border-(--color-faqs-border-main) rotate-0"
                            }`}
                          >
                            {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                          </span>
                        </button>

                        <div
                          id={`faq-answer-${faqId}`}
                          aria-hidden={!isOpen}
                          className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                            isOpen
                              ? "grid-rows-[1fr] opacity-100"
                              : "grid-rows-[0fr] opacity-0"
                          }`}
                        >
                          <div className="overflow-hidden min-h-0">
                            <div
                              className="text-sm text-(--color-text-paragraph) p-[0.938rem_3.5rem_1.125rem_1.125rem] border-t border-t-(--color-faqs-border)"
                              dangerouslySetInnerHTML={{ __html: faq.answer }}
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>

            <div className="bg-[linear-gradient(135deg,#fff0f1,#ffe2e5)] border border-(--color-delivery-border) rounded-2xl p-6 mt-6 text-center">
              <div className="md:w-9/12 mx-auto">
                <h2 className=" mb-2  text-(--color-accent) font-roboto! font-bold">
                  Still have a question?
                </h2>
                <p className=" text-text-muted leading-[1.7] mb-2.5">
                  Tell us what you need the technology for — not just what model
                  you are looking for. Our team can help you identify the right
                  configuration, rental duration and deployment option for your
                  requirement.
                </p>
                <h4 className="text-(--color-light-accent) font-bold mb-1.5">
                  IndiaRentalz · Technology Without Ownership
                </h4>
                <p className=" text-text-muted leading-[1.7]">
                  Use the technology you need. Keep the flexibility you value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Page;
