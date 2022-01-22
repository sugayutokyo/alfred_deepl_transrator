import { deeplTranslate } from './fetchDeeplTranslate.js';

/**
 * sourceLang->targetLangに翻訳する
 * @param {string} targetLang 
 * @param {string} sourceLang 
 * @param {string} keyword 
 */
export const translate = async (targetLang, sourceLang, keyword) => {
  const { translations } = await deeplTranslate(
    targetLang,
    sourceLang,
    keyword,
  );

  if (translations.length > 0) {
    console.log(translations[0].text);
  }
};
