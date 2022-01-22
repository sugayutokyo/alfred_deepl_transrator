import alfy from 'alfy';
import { translate } from './utility/translateForCopy.js';

const keyword = alfy.input;
const targetLang = process.env.TARGET_LANG || '';
const sourceLang = process.env.SOURCE_LANG || '';

await translate(targetLang, sourceLang, keyword);
