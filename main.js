// import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import axios from 'https://cdn.jsdelivr.net/npm/axios@1.6.7/+esm'

const instance = axios.create({
  baseURL: 'https://leatherjackt.com/wp-json/wc/v3/products?ck_ea853d043ca67deb15d428c4e0cf7c2943ad73c3=cs_cdae84249427cf419931fef312d1597f32010f21',
  // timeout: 1000,
  withCredentials: true,

  auth: {
    username: "ck_3af00de51b90e9a3315e7e39d75197b534d11a53",
    password: "cs_abb30dcb605f6ce1e322e2260bca513ea051c563",
    version: "wc/v3"
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
