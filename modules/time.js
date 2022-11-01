// timer
import { DateTime } from "./luxon.js";
const displayDate = () => {
  const date = new Date();
  document.querySelector('.time').innerHTML = DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
};

export default displayDate;