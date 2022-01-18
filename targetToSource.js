import alfy from 'alfy';
import { translate } from './utility/translate.js';

const keyword = alfy.input;
const targetLang = process.env.TARGET_LANG || '';
const sourceLang = process.env.SOURCE_LANG || '';

await translate(sourceLang, targetLang, keyword);
