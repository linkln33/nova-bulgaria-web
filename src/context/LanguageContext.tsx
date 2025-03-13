import React, { createContext, useState, useContext, ReactNode } from 'react';
import translations, { TranslationDictionary } from '../translations';
import unityPlusTranslations from '../translations/unityPlus';

// Merge translations
const mergedTranslations = { ...translations, ...unityPlusTranslations };

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
    return mergedTranslations[key][language as keyof typeof mergedTranslations[typeof key]] || defaultValue || key;
  };

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
