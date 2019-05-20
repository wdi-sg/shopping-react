const fetchJson = (url) => {
	console.log("fetchJson");
	fetch(`${url}`)
	.then((resp) => resp.json())
	.then((data) => {
		console.log("fetchJson data", data);
		return data;
	})
	.catch((error) => console.log("fetchJson error",error))
}

export {fetchJson};