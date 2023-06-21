import axios from "axios";

const authfetch = axios.create( {
baseURL : "https://real-pear-fly-kilt.cyclic.app"
     
})

  authfetch.interceptors.request.use(
    (request) => {

      request.headers["Authorization"] =    // here we pass the token in headers
     "bearer " + localStorage.getItem("token");   // or we can write
      
    // `Bearer ${localStorage.getItem("token")}`
     
      console.log('request sent');   // it means login kiya hai wo
      return request;
    },
    (error) => {
      //to handle or save data in cloud
      return Promise.reject(error);
    }
  );
  
  authfetch.interceptors.response.use(
    (response)=> {
      console.log('got response');
      return response;
  },
    (error) => {
      console.log(error.response);
      if (error.response.status === 404) {
        // do something
        console.log('NOT FOUND');
      }
      if (error.response.status === 401) {
        // do something   401 means unauthorized.
        console.log('NOT FOUND');
      }
      return Promise.reject(error);
    }
  );
  

export default authfetch;