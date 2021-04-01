// Memo-pattern 


const memo = (func) => {
	let cache = {}
	return (...args) => {
		const prop = `${func}(${args})`
		if (cache.hasOwnProperty(prop)) {
			return cache[prop]
		}
		const res = func(...args)
		cache[prop] = res
		return res
	}
}

const sum = (a, b) => a + b
const memedSum = memo(sum);

//Pipe pattern


const mulTwo = (n) => n * 2
const subFour = (n) => n - 4

const pipe = (...funcs) => {
	return (current_vl) => {
		let current_vl = n
		for (let func of funcs) {
			cur = func(current_vl)
		}
		return current_vl
	}
}

//CW - task1


function multiplyAll(arr) {
	return function (num) {
		return arr.map(el => el * num)
	}
}

//CW - task2


function arrayDiff(a, b) {
    var arr = new Array();
    var b = new Set(b);
    for(var i = 0;i<a.length;i++){
        if (!b.has(a[i])){
            arr.push(a[i]);
        }
    }
    return arr;
}