import axios from "axios"
import {base_url} from "../config/Env.js"
console.log(base_url)



export const AdminLogin = ({ email,password }) => {
    let formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);
    formData.forEach((key,value)=>{
        console.log(key,value)
    })
   
    return axios({
      method: 'post',
      url: `${base_url}/api/users/login`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: formData,
    });
  };