"use strict";
const userList = [
    {
        id: 88982762479436,
        name: "nasim",
        lastname: "shaban",
        age: 21,
        maritalStatus: "single",
        gender: "female",
        height: "160cm",
        phoneNumber: "+989308680766",
    }
];
const userAdd = (user) => {
    userList.push(user);
};
userAdd({
    id: 35578982345678,
    name: "reza",
    lastname: "basiri",
    age: 22,
    maritalStatus: "married",
    gender: "male",
    height: "183cm",
    phoneNumber: "+989124874821",
});
const userupdate = (userid) => {
    const userindex = userList.findIndex((item) => item.id === userid);
    userList[userindex] = Object.assign({}, userList[userindex]);
};
userupdate(35578982345678);
console.log(userList);
