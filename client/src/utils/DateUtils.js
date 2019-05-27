import Moment from 'moment';

const dayOfWeek = {
  0: "Dom",
  1: "Seg",
  2: "Ter",
  3: "Qua",
  4: "Qui",
  5: "Sex",
  6: "Sab"
}

class DateUtils {

  static getDayOfWeekStringPTBR(day) {
    return dayOfWeek[day];
  }

  static getDayOfWeekPTBR(date) {
    const dayOfWeekNumber = Moment(date).day();
    return this.getDayOfWeekStringPTBR(dayOfWeekNumber);
  }
}

export default DateUtils;
