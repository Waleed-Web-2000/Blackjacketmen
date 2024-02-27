fetch("https://black-leather-jacket-mens.leatherjackt.com/response.json")
		.then(response => response.json())
		.then(res => {
				const data = res.products;
				let rows = '';
				data.forEach(product => {
						rows += `<tr><td>${product.id}</td><td>${product.name}</td><td>${product.description}</td></tr>`
				})
			        console.log(rows)
				document.getElementById(`tableRows`).innerHTML = rows;
		})
		.catch(error => console.log(error))
