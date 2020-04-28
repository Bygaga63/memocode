const MONTH_LIST = [
  "Января", "Февраля", "Марта",
  "Апреля", "Мая", "Июня",
  "Июля", "Августа", "Сентября",
  "Октября", "Ноября", "Декабря"
]

export default class DateService {
  static toDateString = (date: Date): string => {
    const monthNumber = date.getMonth()
    const dayNumber = date.getDate()
    return `${dayNumber} ${MONTH_LIST[monthNumber]}`
  }

  static isToday = (date: Date): boolean => DateService.isSame(date, new Date())

  static isYesterday = (date: Date): boolean => {
    let yesterdayDate = new Date();
    date.setDate(date.getDate() - 1);
    return date.toDateString() === yesterdayDate.toDateString()
  }

  static isBefore = (date1: Date, date2: Date) => date1 < date2;
  static isAfter = (date1: Date, date2: Date) => date1 > date2;
  static isSame = (date1: Date, date2: Date) => date1.toDateString() === date2.toDateString()
}