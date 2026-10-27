
"use client";

import {
  createContext,
  useContext,
  useSyncExternalStore,
  useCallback,
  type ReactNode,
} from "react";

import type { AppContextType } from "../utils/interface/context.type";
import { CITY_EVENT, STORAGE_KEY } from "../utils/variables/local";

const AppContext = createContext<AppContextType | undefined>(undefined);

function getCity() {
  return localStorage.getItem(STORAGE_KEY) || "";
}

function getServerCity() {
  return "";
}

function subscribe(callback: () => void) {
  window.addEventListener(CITY_EVENT, callback);
  window.addEventListener("storage", callback);

  return () => {
    window.removeEventListener(CITY_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

export function AppProvider({ children }: { children: ReactNode }) {
  const selectedCity = useSyncExternalStore(
    subscribe,
    getCity,
    getServerCity,
  );

  const setSelectedCity = useCallback((city: string) => {
    localStorage.setItem(STORAGE_KEY, city);
    window.dispatchEvent(new Event(CITY_EVENT));
  }, []);

  return (
    <AppContext.Provider value={{ selectedCity, setSelectedCity }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used inside AppProvider");
  }

  return context;
}
