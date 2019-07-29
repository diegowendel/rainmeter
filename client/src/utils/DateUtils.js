import Moment from 'moment';

const dayOfWeekShort = {
  0: "dom",
  1: "seg",
  2: "ter",
  3: "qua",
  4: "qui",
  5: "sex",
  6: "sab"
}

const dayOfWeek = {
  0: "Domingo",
  1: "Segunda-feira",
  2: "Terça-feira",
  3: "Quarta-feira",
  4: "Quinta-feira",
  5: "Sexta-feira",
  6: "Sábado"
}

class DateUtils {

  static getDayOfWeekString(day) {
    return dayOfWeek[day];
  }

  static getDayOfWeekShortString(day) {
    return dayOfWeekShort[day];
  }

  static getDayOfWeek(date) {
    const dayOfWeekNumber = Moment(date).day();
    return this.getDayOfWeekString(dayOfWeekNumber);
  }

  static getDayOfWeekShort(date) {
    const dayOfWeekNumber = Moment(date).day();
    return this.getDayOfWeekShortString(dayOfWeekNumber);
  }
}

export default DateUtils;
