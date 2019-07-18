import Moment from 'moment';

const dayOfWeekShort = {
  0: "Dom",
  1: "Seg",
  2: "Ter",
  3: "Qua",
  4: "Qui",
  5: "Sex",
  6: "Sab"
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
