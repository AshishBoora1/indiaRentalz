import sideImage from "@/../public/images/common/sideImage.jpg";
import keyboardImage from "@/../public/images/common/keyboardImage.jpg";
import btnImages from "@/../public/images/common/btnImages.jpg";
import backImage from "@/../public/images/common/backImage.jpg";
import leftImage from "@/../public/images/common/leftImage.jpg";
import frontImage from "@/../public/images/common/frontImage.jpg";

export const productImages = [
  { src: frontImage, alt: "Laptop front view" },
  { src: sideImage, alt: "Laptop side view" },
  { src: btnImages, alt: "Laptop angled view" },
  { src: keyboardImage, alt: "Laptop keyboard view" },
  { src: backImage, alt: "Laptop back view" },
  { src: leftImage, alt: "Laptop left view" },
];

export const journeyCardData = [
  {
    title: "Select Product & Tenure",
    description:
      "Review configuration, selected city, delivery timeline, GST-inclusive price and starting deposit.",
  },
  {
    title: "Submit Documentation",
    description:
      "Provide identity, address and other documents required for the rental profile.",
  },
  {
    title: "Trust Score Review",
    description:
      "IndiaRentalz evaluates the internal B2C rental eligibility indicator and final security terms.",
  },
  {
    title: "Approval & Payment",
    description:
      "Confirm approved rental terms, refundable security and applicable payment.",
  },
  {
    title: "Delivery",
    description:
      "A quality-checked device is allocated and delivered according to the city-level SLA.",
  },
  {
    title: "Use, Extend or Return",
    description:
      "Continue the rental, extend, upgrade or request return as per applicable terms.",
  },
];

export const whyIndividualsCardData = [
  {
    title: "Lower Upfront Cost",
    description:
      "Use the technology you need without paying the full purchase price upfront.",
  },
  {
    title: "Transparent Monthly Cost",
    description:
      "See base rental, GST and the total monthly payable amount before continuing.",
  },
  {
    title: "Flexible Technology Access",
    description:
      "Rent for the required period and extend, upgrade or return according to applicable terms.",
  },
  {
    title: "Trust-Based Rental Approval",
    description:
      "Your IndiaRentalz Trust Score helps determine approval, refundable security and applicable rental terms.",
  },
];

export const chooseTheRightCardsData = [
  {
    tag: "Economical",
    title: "Value for Money",
    description: "For everyday office work and light creative use.",
    points: ["Balanced CPU", "16GB memory", "SSD storage"],
  },
  {
    tag: "Most Recommended",
    title: "Normal Working",
    description: "Core 5 210H configuration shown on this page.",
    points: ["Video editing", "Development", "Heavy multitasking"],
  },
  {
    tag: "Higher Performance",
    title: "Performance",
    description: "For GPU-heavy and demanding creator workloads.",
    points: ["Dedicated graphics", "Higher memory", "Advanced workloads"],
  },
];

export const faqsData = [
  {
    question: "How is the final monthly rental decided?",
    answer:
      "The displayed B2C rental shows the monthly base rent, GST and the total monthly amount inclusive of GST. The final rental can still vary by tenure, quantity, availability and approved commercial terms. Business and bulk requirements may receive separate enterprise pricing.",
  },
  {
    question: "What is the IndiaRentalz Trust Score for individual customers?",
    answer:
      "The IndiaRentalz Trust Score is an internal rental eligibility indicator for individual customers. It is generated after reviewing identity, address, occupation or employment information, financial verification where required, rental value, tenure and other risk factors. It is not a credit bureau score.",
  },
  {
    question: "What is IERR for business customers?",
    answer:
      "IERR stands for IndiaRentalz Enterprise Rental Rating. It is an internal business rating designed to help assess enterprise rental risk and determine suitable approval limits, refundable security, credit terms and documentation requirements. The rating may consider business age, constitution, GST and financial profile, previous payment behaviour, rental history and total asset exposure.",
  },
  {
    question: "Does a higher Trust Score or IERR guarantee approval?",
    answer:
      "No. These indicators support the internal approval process but do not guarantee approval. Final approval remains subject to document verification, product availability, order value, payment status, delivery location and IndiaRentalz internal risk policy.",
  },
  {
    question: "Is the refundable security amount the same for every customer?",
    answer:
      "No. The refundable security may vary by customer profile, device value, quantity, tenure, documentation, Trust Score or IERR, previous rental relationship and approved commercial terms.",
  },
  {
    question:
      "Can an existing customer get faster approval for an add-on order?",
    answer:
      "Existing customers with a satisfactory account and payment history may qualify for a faster add-on review, subject to current exposure, outstanding payments, product availability and any updated documentation required by IndiaRentalz.",
  },
  {
    question: "Can I request a different laptop configuration?",
    answer:
      "Yes. You can request another processor, memory, storage, graphics, screen size or operating system. IndiaRentalz can recommend Value for Money, Normal Working and Performance options based on your workload and budget.",
  },
  {
    question:
      "Can IndiaRentalz deliver directly to employees in different cities?",
    answer:
      "Yes, depending on the project, approved addresses, stock availability and logistics feasibility. Multi-city employee deployment is particularly useful for remote teams, onboarding projects and enterprise rollouts.",
  },
  {
    question: "What happens if the rented laptop develops a fault?",
    answer:
      "Raise a support request with IndiaRentalz. Depending on the issue and rental terms, support may include remote troubleshooting, repair coordination, pickup, service or replacement subject to availability.",
  },
  {
    question: "Why is my delivery city already shown on the product page?",
    answer:
      "IndiaRentalz captures the customer's city at the beginning of the website journey. The product page then uses that selected city to show the expected delivery timeline, instead of asking the customer to enter the location again.",
  },
  {
    question: "Is the displayed B2C rental inclusive of GST?",
    answer:
      "Yes. The product page shows the base monthly rental, GST amount and the total monthly rental inclusive of GST, so the customer can see the actual monthly payable amount clearly before continuing.",
  },
  {
    question:
      "How is the refundable security deposit decided for B2C customers?",
    answer:
      "The product page can show a starting refundable deposit. The final security amount is determined after verification and may vary based on the IndiaRentalz Trust Score, customer profile, equipment value, tenure and approved rental terms.",
  },
];
