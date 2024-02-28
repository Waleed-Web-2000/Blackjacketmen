
		fetch("https://black-leather-jacket-mens.leatherjackt.com/response.json").then((data) => {
				return data.json();
		}).then((objectData) => {
				console.log(objectData[0].title);
				let tableData="";
				objectData.map((values) => {
				  tableData+=`<tr><td>${values.id}</td><td>${values.name}</td><td>${values.price}</td></tr>`;
				});
				document.getElementById("table_body").innerHTML=tableData;
		})
		
