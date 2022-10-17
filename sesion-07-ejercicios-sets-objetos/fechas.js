const todayDate = new Date ();

const myBirthday = new Date("1985/05/31 GMT");

const todayVsMyBirthday = todayDate > myBirthday;

const myBirthdayDay = myBirthday.getDate();

const myBirthdayMonth = myBirthday.getMonth() +1;

const myBirthdayYear = myBirthday.getFullYear();