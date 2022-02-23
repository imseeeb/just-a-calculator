const calculator = document.querySelector('.calculator');
const display = document.querySelector('.display');

let typedStr='',
    typedNum=0,
    storedNum=0,
    result;

let sumFlag = false,
    subtractFlag = false,
    divideFlag = false,
    percentFlag = false,
    multiplyFlag = false,
    pointFlag = false;

calculator.addEventListener('click', (e)=>{
    let key = e.target.className;

    if (isNaN(parseFloat(key)) == false){
        if (typedStr.length == 7) return
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
    //if (n.toString().length>7
    display.innerHTML = n;
    if (n==='ERROR'){
        typedNum = 0;
    }
    else{
        typedNum = n;
    }
}

function clearNum(){
    typedStr='';
}

function equals(){
    pointFlag = false;

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