import alfy from 'alfy';
import { deeplTranslate } from './fetchDeeplTranslate.js';

export const translate = async (
  targetLang,
  sourceLang,
  keyword,
  largeType = false,
) => {
  // 最後の文字が;の場合のみ処理を走らせる
  if (keyword.slice(-1) === ';') {
    const keywordExceptLastChar = keyword.slice(0, -1);

    const { translations } = await deeplTranslate(
      targetLang,
      sourceLang,
      keywordExceptLastChar,
    );

    const items = translations.map(trans => {
      if (!largeType) {
        return {
          title: trans.text,
          subtitle: 'Copy to Clipboard',
          arg: trans.text,
        };
      } else {
        // let argLargeType = '--input--\n';
        let argLargeType = '';
        // argLargeType = argLargeType + keywordExceptLastChar + '\n';
        // argLargeType = argLargeType + '\n--output--\n';

        // 出力する文字列を30文字ごとに改行を加える
        let arraySplitSyntax = [...trans.text];
        arraySplitSyntax.map((char, index) => {
          if (index != 0 && index % 25 === 0) {
            argLargeType = argLargeType + '\n';
          }
          argLargeType = argLargeType + char;
        });

        return {
          title: trans.text,
          subtitle: 'Open Large Type',
          arg: argLargeType,
        };
      }
    });

    alfy.output(items);
  } else {
    alfy.output([
      {
        title: 'Enter a colon(;) to start the translation.',
      },
    ]);
  }
};
