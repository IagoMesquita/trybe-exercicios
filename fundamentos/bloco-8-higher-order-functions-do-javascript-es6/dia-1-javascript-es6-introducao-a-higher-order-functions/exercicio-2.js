const numberChecker = (myNumber, number) => myNumber === number;

const lotterResult = (myNumber, callBack) => {
    const number = Math.floor((Math.random()*5) + 1);
    
    return callBack(myNumber, number) ? 'Luck day, you won!' : 'Try Again';
};

console.log(lotterResult(2, numberChecker));