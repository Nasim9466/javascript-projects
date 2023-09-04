"use strict";
const numberInput = [];
const input = document.querySelector("#input");
const randomNumberButton = document.querySelector("#randomNumber");
const firstPreparationButton = document.querySelector("#firstpreparation");
const deleteButton = document.querySelector("#delete");
randomNumberButton === null || randomNumberButton === void 0 ? void 0 : randomNumberButton.addEventListener("click", () => {
    const randomNumber = (Math.floor(Math.random() * 100000));
    input.value = randomNumber.toString();
});
firstPreparationButton === null || firstPreparationButton === void 0 ? void 0 : firstPreparationButton.addEventListener("click", () => {
    var _a;
    const firstPreparation = {
        inputNumber: (_a = input === null || input === void 0 ? void 0 : input.value) !== null && _a !== void 0 ? _a : " ",
    };
    numberInput.push(firstPreparation);
});
console.log(numberInput);
deleteButton === null || deleteButton === void 0 ? void 0 : deleteButton.addEventListener("click", () => {
    console.clear();
    input.value = "";
});
//# sourceMappingURL=index.js.map