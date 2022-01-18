import alfy from 'alfy';

const token = process.env.DEEPL_ACCESS_TOKEN || '';
let keyword = alfy.input;

// 最後の文字が;の場合のみ処理を走らせる
if (keyword.slice(-1) === ';') {
  const keywordExceptLastChar = keyword.slice(0, -1);

  const { translations } = await alfy.fetch(
    `https://api-free.deepl.com/v2/translate`,
    {
      query: {
        auth_key: token,
        text: keywordExceptLastChar,
        target_lang: 'EN',
        source_lang: 'JA',
      },
    },
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
      title: 'Enter a colon(;) to start the translation.',
    },
  ]);
}
