import alfy from 'alfy';

const token = process.env.DEEPL_ACCESS_TOKEN || '';

export const deeplTranslate = (
  targetLang,
  sourceLang,
  keyword,
) => {
  return alfy.fetch(`https://api-free.deepl.com/v2/translate`, {
    query: {
      auth_key: token,
      text: keyword,
      target_lang: targetLang,
      source_lang: sourceLang,
    },
  });
};
