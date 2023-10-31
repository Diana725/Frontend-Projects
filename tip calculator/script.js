const billInput = document.querySelector('#billTotalInput')
const tipInput = document.querySelector('#tipInput')
const numberOfPeopleDiv = document.querySelector('#numberOfPeople')
const perPersonTotal = document.querySelector('#perPersonTotal')

let numberOfPeople = Number(numberOfPeopleDiv.innerText)
const calculateBill = () => {
    const bill= Number(billInput.value)
    const tipPercentage = (bill*Number(tipInput.value))/100
    let tipAmount=tipPercentage;
    const totalBill= bill + tipAmount
    const personTotal = totalBill/numberOfPeople;
    perPersonTotal.innerText = `$${personTotal.toFixed(2).toLocaleString('en-US')}`
  }
  
const increasePeople = () => {
    numberOfPeople +=1;
    numberOfPeopleDiv.innerText = numberOfPeople;
    calculateBill();
  }
  
const decreasePeople = () => {
    if (numberOfPeople <= 1){
        alert ('you cannot go less than 1 person')
        return
    }
    numberOfPeople -=1;
    numberOfPeopleDiv.innerText = numberOfPeople;
    calculateBill();
  }