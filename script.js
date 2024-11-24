// get values so that refrence
let princplAmt = document.querySelector('#princpl-Amt')
let intrstRate = document.querySelector('#intrst-Rate')
let noOfMnths = document.querySelector('#noOf-Mnths')
let submForm = document.querySelector('#calc-form')
// show calculated values and data so that refrence
let monthlyPaymentShow = document.querySelector('#monthlyPaymentEMI')
let toatalInterestAmountsShow = document.querySelector('#toatalInterestAmounts')
let payableAmountsShow = document.querySelector('#payableAmounts')
let loanAmountsShow = document.querySelector('#loanAmounts')
let clearBtn = document.querySelector('#clear-btn')

// ---- all event listner in last ----

// submForm.addEventListener("submit", (e)=>{
//    e.preventDefault();
//    getInpValues();
// })

let getInpValues=()=>{
    //📗🔖 parseInt() , parseFloat() is used bcz <input type="number"> return/give string so we want it in number (interger, float what is was originally)
    let principalAmount = parseInt(princplAmt.value);
    let interestRate = parseFloat(intrstRate.value);
    let noOfMonths =  parseInt(noOfMnths.value);


    // let principalAmount = princplAmt.value;
    // let interestRate = intrstRate.value;
    // let noOfMonths =  noOfMnths.value;

    console.log(principalAmount);
    console.log(interestRate);
    console.log(noOfMonths);


    //NOTE:📗🔖input number element give/return string instead of number. but it give number look string 📗🔖PROBLEM: can perform calculation it will produce wrong input and will do concate insred of plus and minus.

    // let principalAmount = princplAmt.value;
    // let interestRate = intrstRate.value;
    // let noOfMonths =  noOfMnths.value;

    // console.log(principalAmount); // "25000"
    // console.log( typeof principalAmount); // "string"
    // console.log(interestRate); // "6.75"
    // console.log(typeof interestRate); // "string"
    // console.log(noOfMonths); // "18"
    // console.log(typeof noOfMonths); // "string"
    
    validateInpValues(principalAmount, interestRate, noOfMonths);//📗🔖 No need to validate input values bcz <input yype="number"> element of number style already dont take string and special symbol just validate for for empty.
}

let validateInpValues=(principalAmount, interestRate, noOfMonths)=>{
    if(!principalAmount || !interestRate ||  !noOfMonths){
        alert("empty, Please fill it.")
    }else if(principalAmount <=0 || interestRate <=0 || noOfMonths <=0){
          alert("Please enter positive and greater than 0 value.")
    }else{
        calculateMonthlyPaymentEMI(principalAmount, interestRate, noOfMonths);
    }
}

let calculateMonthlyPaymentEMI=(PA, IR, NM)=>{
    // IR - Interest rate
    // PA - Principal Amount or Loan Amount
    // NM - No of Months
    console.log("Loan Amount = ", PA);


   // ------ calculate EMI   -----------

    let usefullIR = IR / 12;
    let formulIR = usefullIR / 100;
    
    const MonthlyPaymentEMI = (PA * formulIR * Math.pow(1 + formulIR, NM)) / (Math.pow(1 + formulIR, NM) - 1);  //REMEMBER: after this calculation result value we get is string insted of number📗🔖 id u wanna use these value further then convert into number the use parseInt() and parseFloat()
    console.log("EMI = ", MonthlyPaymentEMI.toFixed(0));

   // ------ calculate Payable Amount  -----------

    let payableAmount = MonthlyPaymentEMI * NM ; //REMEMBER: after this calculation result value we get is string insted of number📗🔖 id u wanna use these value further then convert into number the use parseInt() and parseFloat()
    console.log("payable Amount = ", payableAmount.toFixed(0));

   
    // ------ calculate Total Interest -----------

    let totalInterest = payableAmount - PA ;
    console.log("total Interest = ", totalInterest.toFixed(0)); //REMEMBER: after this calculation result value we get is string insted of number📗🔖 id u wanna use these value further then convert into number the use parseInt() and parseFloat()

    showLoanDetails(PA, MonthlyPaymentEMI, payableAmount, totalInterest);
    // showLoanDetails();
}

let showLoanDetails=(PA, MonthlyPaymentEMI, payableAmount, totalInterest)=>{
    // two work we are during here
    // here Math.trunc() 📗🔖 reomove the decimal
    // here toLocalString() show no with , comman so that easy readbale \

      loanAmountsShow.innerHTML = `₹${Math.trunc(PA).toLocaleString()}`;
      payableAmountsShow.innerHTML = `₹${Math.trunc(payableAmount).toLocaleString()}`;
      toatalInterestAmountsShow.innerHTML = `₹${Math.trunc(totalInterest).toLocaleString()}`;
      monthlyPaymentShow.innerHTML = `₹${Math.trunc(MonthlyPaymentEMI).toLocaleString()}`;


    // loanAmountsShow.innerHTML = PA.toLocaleString('en-US', { style: 'currency', currency: 'INR' });
    // payableAmountsShow.innerHTML = payableAmount.toLocaleString('en-US', { style: 'currency', currency: 'INR' });
    // toatalInterestAmountsShow.innerHTML = totalInterest.toLocaleString('en-US', { style: 'currency', currency: 'INR' });
    // monthlyPaymentShow.innerHTML = MonthlyPaymentEMI.toLocaleString('en-US', { style: 'currency', currency: 'INR' });

    // ----- 📗🔖 remove decimal or upto how much decimal .toFixed(2) means 5.92 upto 2decimal then use toFixed() ------

    // loanAmountsShow.innerHTML = PA.toFixed(0);
    // payableAmountsShow.innerHTML = payableAmount.toFixed(0);
    // toatalInterestAmountsShow.innerHTML = totalInterest.toFixed(0);
    // monthlyPaymentShow.innerHTML = MonthlyPaymentEMI.toFixed(0);
}

let clearInputAndResult=()=>{
    //📗🔖  reset() is used to form 's all input element value empty.
    submForm.reset();

    // before reset() we manully set 
    // like this .innerHTML = " ";
}




// ---- all event listner in last ----

submForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    getInpValues();
 })

clearBtn.addEventListener("click", ()=>{

    clearInputAndResult();
    // &mdash; set dash meand - look like minus or say set empty
    loanAmountsShow.innerHTML = "&mdash;";
    payableAmountsShow.innerHTML = "&mdash;";
    toatalInterestAmountsShow.innerHTML = "&mdash;";
    monthlyPaymentShow.innerHTML =  "&mdash;";
 })
