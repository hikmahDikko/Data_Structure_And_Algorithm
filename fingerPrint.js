const type1 = "1,2,6,7";
const type2 =  "1,2,3,9";
const type3 = "";
const type4 = "6,7,8";
const type5 = "2,3,4,5,7,8,9,10";
const type6 = "left thumb and right thumb";
const type7 = "1,2,9,10";
const type8 = "1,6";

const fingerPrintVerification = (fingerPrintTypes) => {
    if(fingerPrintTypes === "") return true

    const numArray = fingerPrintTypes.split(",").map((item) => {
        return parseInt(item); 
    });
    
    if(numArray.length % 2 === 0) {
        const newArray = [];
        let result;
        const arr1 = numArray.slice(0, numArray.length/2);

        const arr2 = numArray.slice(numArray.length/2);

        arr1.forEach((element) =>{
            result = element + 5;
            newArray.push(result)
        });
       
        if(JSON.stringify(newArray) === JSON.stringify(arr2)) {
            return true;
        }else {
            return false;
        }
    } else{
        return false;
    }
}

console.log(fingerPrintVerification(type2));
// console.log("Verify Finger Print of type : '1,2,6,7' returns  " + fingerPrintVerification(type1));
// console.log("Verify Finger Print of type : '1,2,3,9' returns  " + fingerPrintVerification(type2));
// console.log("Verify Finger Print of type : ''  returns  " + fingerPrintVerification(type3));
// console.log("Verify Finger Print of type : '6,7,8'  returns  " + fingerPrintVerification(type4));
// console.log("Verify Finger Print of type : '2,3,4,5,7,8,9,10'  returns  " + fingerPrintVerification(type5));
// console.log("Verify Finger Print of type : 'left thumb and right thumb'  returns  " + fingerPrintVerification(type6));
// console.log("Verify Finger Print of type : '1,2,9,10'  returns  " + fingerPrintVerification(type7));
// console.log("Verify Finger Print of type : '1,6'  returns  " + fingerPrintVerification(type8));