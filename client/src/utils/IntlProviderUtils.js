import React, { cloneElement } from 'react';
import { IntlProvider } from 'react-intl';
import translations from '../locale/translations.json';

export const intl = (component, locale) => {
  const language = locale || "en-US";
  return (
    <IntlProvider locale={language}
      messages={translations[language]}>
        { cloneElement(component) }
    </IntlProvider>
  );
};
