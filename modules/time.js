// timer
import { DateTime } from './luxon.js';

const displayDate = () => {
  document.querySelector('.time').innerHTML = DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
};

export default displayDate;