

 const instance = axios.create({
 baseURL: 'http://leatherjackt.com/wp-json/wc/v3/products?ck_3af00de51b90e9a3315e7e39d75197b534d11a53=cs_abb30dcb605f6ce1e322e2260bca513ea051c563',
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
