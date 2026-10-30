import { CheckoutData } from "../interface/props.types";

const CHECKOUT_KEY = "checkoutProgress";
const CHECKOUT_EVENT = "checkoutProgressChange";

const DEFAULT_CHECKOUT: CheckoutData = {
  activeStep: 1,
  verifiedMobile: "",
  submittedAddress: null,
};

let checkoutSnapshot: CheckoutData = DEFAULT_CHECKOUT;
let checkoutLoaded = false;

function getCheckoutSnapshot(): CheckoutData {
  if (typeof window === "undefined") {
    return DEFAULT_CHECKOUT;
  }

  if (!checkoutLoaded) {
    checkoutLoaded = true;

    try {
      const saved = localStorage.getItem(CHECKOUT_KEY);

      if (saved) {
        const data = JSON.parse(saved);

        checkoutSnapshot = {
          activeStep: [1, 2, 3].includes(data.activeStep)
            ? data.activeStep
            : 1,
          verifiedMobile:
            typeof data.verifiedMobile === "string"
              ? data.verifiedMobile
              : "",
          submittedAddress: data.submittedAddress ?? null,
        };
      }
    } catch {
      checkoutSnapshot = DEFAULT_CHECKOUT;
    }
  }

  return checkoutSnapshot;
}

function getServerSnapshot(): CheckoutData {
  return DEFAULT_CHECKOUT;
}

function subscribeToCheckout(callback: () => void) {
  const handleStorage = () => {
    checkoutLoaded = false;
    callback();
  };

  window.addEventListener(CHECKOUT_EVENT, callback);
  window.addEventListener("storage", handleStorage);

  return () => {
    window.removeEventListener(CHECKOUT_EVENT, callback);
    window.removeEventListener("storage", handleStorage);
  };
}

function updateCheckout(data: Partial<CheckoutData>) {
  checkoutSnapshot = {
    ...getCheckoutSnapshot(),
    ...data,
  };

  checkoutLoaded = true;

  try {
    localStorage.setItem(CHECKOUT_KEY, JSON.stringify(checkoutSnapshot));
  } catch (error) {
    console.error("Checkout save failed:", error);
  }

  window.dispatchEvent(new Event(CHECKOUT_EVENT));
}

export {
  DEFAULT_CHECKOUT,
  getCheckoutSnapshot,
  getServerSnapshot,
  subscribeToCheckout,
  updateCheckout,
};
