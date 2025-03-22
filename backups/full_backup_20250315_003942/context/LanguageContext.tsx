import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { translations } from '../translations';
import unityPlusTranslations from '../translations/unityPlus';
import { onboardingTranslations } from '../translations/onboarding-translations';

// Merge translations with proper type definition
const mergedTranslations: Record<string, Record<string, string>> = {
  ...translations,
  ...unityPlusTranslations,
  ...onboardingTranslations
};

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string, defaultValue?: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState('en');

  // Translation function with default value support
  const t = (key: string, defaultValue?: string): string => {
    if (!mergedTranslations[key]) {
      console.warn(`Translation key not found: ${key}`);
      return defaultValue || key;
    }
    return mergedTranslations[key][language] || defaultValue || key;
  };

  // Store language preference in localStorage
  useEffect(() => {
    const storedLanguage = localStorage.getItem('novaBulgariaLanguage');
    if (storedLanguage) {
      setLanguage(storedLanguage);
    }
  }, []);

  // Update localStorage when language changes
  useEffect(() => {
    localStorage.setItem('novaBulgariaLanguage', language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
