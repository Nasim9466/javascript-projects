type inputType = {
inputNumber : string | number 

}
type numberInputeType = inputType[];

const numberInput : numberInputeType = [] ;

const input = document.querySelector<HTMLInputElement>("#input")
const randomNumberButton = document.querySelector<HTMLButtonElement>("#randomNumber")
const firstPreparationButton = document.querySelector<HTMLButtonElement>("#firstpreparation")
const deleteButton = document.querySelector<HTMLButtonElement>("#delete")

randomNumberButton?.addEventListener("click" , () => {
        const randomNumber = (Math.floor(Math.random() * 100000))
        input!.value = randomNumber.toString()
    }
    
)


firstPreparationButton?.addEventListener("click" , () => {
    const  firstPreparation:inputType = {
        inputNumber:input?.value?? " ",
    } 
    numberInput.push( firstPreparation)
});

console.log(numberInput)

deleteButton?.addEventListener("click" , () => {
    console.clear()
    input!.value = ""
});