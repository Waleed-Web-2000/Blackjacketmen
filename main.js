const BASE_URL = 'https://onlineseller.pk/wp-json/wc/v3/';

 const getTodoList = () => {
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
