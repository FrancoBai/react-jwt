import axios from "axios";
const url = "http://localhost:8080/api/auth/";

const register = (username, email, password) => {
  return axios.post(url + "signup", {
    username,
    email,
    password,
  });
};

const login = (username, password) => {
  return axios
    .post(url + "signin", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      //return response.data;
    });
};

const logOut = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
  register,
  login,
  logOut,
  getCurrentUser,
};
export default AuthService;
