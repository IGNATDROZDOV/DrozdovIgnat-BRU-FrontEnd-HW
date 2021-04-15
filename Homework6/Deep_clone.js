const deepClone = (obj) => {
	const clonedobj = {};
	for (const i in obj) {
		if (obj[i] instanceof Object) {
			clonedobj[i] = deepClone(obj[i]);
			continue;
		}
		clonedobj[i] = obj[i];
	}
	return clonedobj;
}

let obj = {
	language: {
		name: 'Java',
		quality: 'Shit',
		features: {
			latest_version: 8,
			is_static: true,
		}
	}
}

let objclone = deepClone(obj);
console.log(obj);
console.log(objclone);

