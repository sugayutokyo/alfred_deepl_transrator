import { deeplTranslate } from './fetchDeeplTranslate.js';

export const translate = async (
  targetLang,
  sourceLang,
  keyword
) => {
  const keywordExceptLastChar = keyword.slice(0, -1);
  console.log('--input--');
  console.log(keywordExceptLastChar);
  const { translations } = await deeplTranslate(
    targetLang,
    sourceLang,
    keywordExceptLastChar,
  );

  translations.map(trans => {
    console.log('\n--output--');
    // 出力する文字列を25文字ごとに改行を加える
    let result = '';
    let arraySplitSyntax = [...trans.text];
    arraySplitSyntax.map((char, index) => {
      if (index != 0 && index % 25 === 0) {
        result = result + '\n';
      }
      result = result + char;
    });
    console.log(result);
  });
};
