import axios from 'axios';

const api = axios.create({
 baseURL: 'https://www.hummelbrasil.com/api/catalog_system/pub/products/search?fq=productId:3831',
 crossDomain: true,
 dataType: "json",
 global: false,
 headers:{
    "Content-Type": "application/json",
    "Accept": "application/json"
 }
});

export default api
