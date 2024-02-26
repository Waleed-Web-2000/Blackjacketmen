

 const instance = axios.create({
 baseURL: 'https://onlineseller.pk/wp-json/wc/v3/products',
  // timeout: 1000,
  // withCredentials: true,
  auth: {
   username: "ck_de634d9199442a71813a2fbbda902cd05d907c12",
   password: "cs_c2d3192a37386e6d91c05b57975ef6351da65ced"
 }
});

instance.get('products')
  .then((resp) => console.log(resp.data)) 

 const getTodoList = (resp.data) => {
	 	axios.get(`{$BASE_URL}/products?_limit=5`).then((apiResponse) => {
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
