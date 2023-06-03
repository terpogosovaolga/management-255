const months = [
  "Января",
  "Февраля",
  "Марта",
  "Апреля",
  "Мая",
  "Июня",
  "Июля",
  "Августа",
  "Сентября",
  "Октября",
  "Ноября",
  "Декабря",
];

const funcs = {
  getPrettyDate: (date) => {
    return (
      (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) +
      "." +
      (date.getMonth() < 10 ? "0" + date.getMonth() : date.getMonth()) +
      "." +
      date.getFullYear()
    );
  },
  getPrettyDateWithMonth: (date) => {
    return (
      date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear()
    );
  },
  getDateDifference: (begin, end) => {
    return Math.ceil((end - begin) / (1000 * 3600 * 24));
  },
};

export const { getPrettyDate, getPrettyDateWithMonth, getDateDifference } =
  funcs;
