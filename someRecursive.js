const isOld = val => val % 2 !== 0;

function someRecursive(arr){
    if(arr.length === 0) return false;

    if(isOld(arr[0])){
        return true;
    }
    return someRecursive(arr.slice(1));
}

console.log(someRecursive([2, 4, 6, 8, 9], isOld));