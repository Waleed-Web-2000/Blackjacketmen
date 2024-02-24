// import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import axios from 'https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm'
const instance = axios.create({
  baseURL: 'https://onlineseller.pk/wp-json/wc/v3/',
  // timeout: 1000,
  withCredentials: true,
  	access-control-allow-origin: 'https://blackjacketmen.vercel.app/',
  auth: {
    username: "ck_de634d9199442a71813a2fbbda902cd05d907c12",
    password: "cs_c2d3192a37386e6d91c05b57975ef6351da65ced"
  }
});

instance.get('products')
  .then(resp => {
    const data = resp.products;
    let rows = '';
    data.foreach(products => {
      row += `<tr><td>${product.id}</td><td>${product.title}</td><td>${product.description}</td></tr>`
    })
    document.getElementById('table_body').innerHTML = rows;
  })
  .catch(error => console.log(error))

// const api = new WooCommerceRestApi({
//   url: "https://onlineseller.pk/",
//   consumerKey: "ck_de634d9199442a71813a2fbbda902cd05d907c12",
//   consumerSecret: "cs_c2d3192a37386e6d91c05b57975ef6351da65ced",
//   version: "wc/v3"
// });

// api.get("products")
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((error) => {
//     console.log(error.response.data);
//   });
