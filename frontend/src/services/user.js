import axios from "axios";
const baseURL = "http://localhost:3000";

export default class UserServices {
  async login_user(form) {
    return axios.post(baseURL + "/auth/login", form)
      .then(function (response) {
        console.log("response",response)
        console.log("response.data",response.data)
        console.log("it's ok")
        return response; // return a value to indicate successful login
      })
      .catch(function (error) {
        console.log("it's an error",error)
        return false; // return a value to indicate failed login
      });
  }
}
