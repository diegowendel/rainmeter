import Moment from 'moment';

class DateUtils {

  static getDayOfWeekKey(date) {
    const dayOfWeekNumber = Moment(date).day();
    return `DateUtils.dayofweek.${dayOfWeekNumber}`;
  }

  static getDayOfWeekShortKey(date) {
    const dayOfWeekNumber = Moment(date).day();
    return `DateUtils.dayofweek.short.${dayOfWeekNumber}`;
  }
}

export default DateUtils;
