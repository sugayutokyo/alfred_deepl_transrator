import alfy from 'alfy';
import { translate } from './utility/translateForLarge.js';

const keyword = alfy.input;
const targetLang = process.env.TARGET_LANG || '';
const sourceLang = process.env.SOURCE_LANG || '';

// 入力が空文字の場合は翻訳しない.
if (keyword != '') {
  await translate(sourceLang, targetLang, keyword);
}
