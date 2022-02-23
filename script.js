const calculator = document.querySelector('.calculator');
const display = document.querySelector('.display');

let typedStr='',
    typedNum=0,
    storedNum=0,
    result;

let sumFlag = false,
    subtractFlag = false,
    divideFlag = false,
    multiplyFlag = false,
    percentFlag = false,
    pointFlag = false;

calculator.addEventListener('click', (e)=>{
    let key = e.target.className;
    let maxValue;

    if (pointFlag==true){
        maxValue=8;
    }
    else{
        maxValue=7;
    }

    if (isNaN(parseFloat(key)) == false){
        if (typedStr.length == maxValue) return
        if (typedStr == '0'){
            typedStr = key;
        }
        else {
            typedStr=typedStr+key;
        }
        convertToNum();
        updateDisplay(typedNum);
    }

    if (key == 'point'){
        if (pointFlag == true) return;
        pointFlag = true;
        typedStr=typedStr+'.';
    }

    if (key == 'AC'){
        typedStr = '';
        typedNum = 0;
        storedNum = 0;
        updateDisplay(0);
    }

    if (key == 'C'){
        if (typedStr.slice(0,-1).length == 0){
            typedStr = '0';
        }
        else{
            typedStr = typedStr.slice(0,-1);
        }
        convertToNum();
        updateDisplay(typedNum);
    }

    if (key == 'sum'){
        //if (multiplyFlag || divideFlag == true) return
        equals();
        sumFlag = true;
        storedNum = typedNum;
        clearNum();
    }

    if (key == 'subtract'){
        equals();
        subtractFlag = true;
        storedNum = typedNum;
        clearNum();
    }

    if (key == 'multiply'){
        equals();
        multiplyFlag = true;
        storedNum = typedNum;
        clearNum();
    }

    if (key == 'divide'){
        equals();
        divideFlag = true;
        storedNum = typedNum;
        clearNum();
    }

    if (key == 'percent'){
        if (sumFlag || subtractFlag == true){
            typedNum = storedNum*typedNum/100;
        }
        if (multiplyFlag || divideFlag == true){
            typedNum = typedNum/100;
        }
        equals();
    }

    if (key == 'equals'){
        equals();
    }
});

function updateDisplay(n){
    n = checkLength(n);
    display.innerHTML = n;
    if (n==='ERROR'){
        typedNum = 0;
    }
    else{
        typedNum = n;
    }
}

function checkLength(n){
    let maxLength = 7;
    if(n.toString().includes('-')){
        maxLength = maxLength + 1;
    }
    if(n.toString().includes('.')){
        maxLength = maxLength + 1;
    }

    if(n.toString().length>maxLength){
        n = n.toString();
        n = n.slice(0, maxLength);
        n = parseFloat(n);
    }

    return n
}

function clearNum(){
    typedStr='';
}

function equals(){

    if (sumFlag == true){
        updateDisplay(addition());
    }

    if (subtractFlag == true){
        updateDisplay(subtraction());
    }

    if (multiplyFlag == true){
        updateDisplay(multiply());
    }

    if (divideFlag == true){
        updateDisplay(divide());
    }

    clearNum();
}

function convertToNum(){
    typedNum = parseFloat(typedStr);
}

function addition(){
    sumFlag = false;
    return (storedNum + typedNum);
}

function subtraction(){
    subtractFlag = false;
    return (storedNum - typedNum);
}

function multiply(){
    multiplyFlag = false;
    return (storedNum * typedNum);
}

function divide(){
    divideFlag = false;
    if (typedNum == 0) return 'ERROR';
    return (storedNum / typedNum);
}