import alfy from 'alfy';
import { translate } from './utility/translate.js';

const keyword = alfy.input;
targetLang = process.env.TARGET_LANG || '';
sourceLang = process.env.SOURCE_LANG || '';

await translate(targetLang, sourceLang, keyword);
