

 const instance = axios.create({
 baseURL: 'https://leatherjackt.com/wp-json/wc/v3/',
  // timeout: 1000,
  // withCredentials: true,
  auth: {
   username: "ck_3af00de51b90e9a3315e7e39d75197b534d11a53",
   password: "cs_abb30dcb605f6ce1e322e2260bca513ea051c563"
 }
});
instance.get('products')
  .then((resp) => console.log(resp.data)) 
 const getTodoList = () => {
	 	axios.get(`${BASE_URL}/products?_limit=5`).then((apiResponse) => {
	 		console.log(apiResponse);
	 	const {data} = apiResponse;
	 	const ulElement = document.querySelector('ul');

	 	data.forEach((singleTodo) => {
	 		const liElement = document.createElement('li');
	 		liElement.innerText = singleTodo.id;
	 		ulElement.append(liElement);
	 	})	
 	});
 };
