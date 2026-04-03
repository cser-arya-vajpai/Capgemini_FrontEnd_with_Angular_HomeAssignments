//Create a function to count number of vowels in a given string

function countVowels(str) {
    let count = 0;
    for(c of str){
        if(c === 'a' || c === 'A' || c === 'e' || c === 'E' || c === 'i' || c === 'I' || c === 'o' || c === 'O' || c === 'u' || c === 'U') {
            count+=1;0
        }
    }
    console.log(count);
}

console.log(countVowels("sakneeio"));