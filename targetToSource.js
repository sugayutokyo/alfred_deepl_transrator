import alfy from 'alfy';
import { translate } from './utility/translate.js';

const keyword = alfy.input;

await translate('JA', 'EN', keyword);