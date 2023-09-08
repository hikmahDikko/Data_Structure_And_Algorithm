
function capitalizedWord(words=[]) {

    const capital = (str)=>{
        return str[0].toUpperCase() + str.slice(1).toUpperCase()
    }
    
    if(words.length > 0){
   
      return [capital(words.shift())].concat(capitalizedWord(words))
    }
    return words;
}

console.log(capitalizedWord(["hello", "world", "foo"]));
