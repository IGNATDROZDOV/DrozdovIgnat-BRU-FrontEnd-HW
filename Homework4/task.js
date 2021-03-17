function calcStrLen(str) {
    const pattern = /[^a-zа-я]+/ig
    let words = str.split(pattern);
    let results = [];
    for (let word of words) {
        results.push([word, word.length].join(' '));
    }
    return results
}


function wordPattern(str) {
    let letters = Array.from(new Set(str.toLowerCase()));
    let results = [];
    for (let letter of str) {
        results.push(letters.indexOf(letter));
    }
    return results.join('.')
}


const stringParse = s => typeof s === 'string' ?
	s.replace(/([a-zA-Z])\1{1}(\1+)/g, '$1$1[$2]') :
	'Please enter a valid string';


/* 
"" + 1 + 0 // "10"
"" - 1 + 0 // -1
true + false // 1
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // "9px"
"$" + 4 + 5 // $45
"4" - 2 // 2
"4px" - 2 // NaN
7 / 0 // Infinity
"  -9  " + 5 // "  -9  5"
"  -9  " - 5 // -14
null + 1 // 1
undefined + 1 // NaN
" \t \n" - 2 // -2
*/