import alfy from 'alfy';
import { deeplTranslate } from './utility/fetchDeeplTranslate.js';

let keyword = alfy.input;

// 最後の文字が;の場合のみ処理を走らせる
if (keyword.slice(-1) === ';') {
  const keywordExceptLastChar = keyword.slice(0, -1);

  const { translations } = await deeplTranslate(
    'JA',
    'EN',
    keywordExceptLastChar,
  );

  const items = translations.map(trans => {
    return {
      title: trans.text,
      subtitle: 'Copy to Clipboard',
      arg: trans.text,
    };
  });

  alfy.output(items);
} else {
  alfy.output([
    {
      title: 'Enter a colon(;) to start the translation.t',
    },
  ]);
}
