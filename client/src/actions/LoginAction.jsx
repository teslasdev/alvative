import axios from "axios";
import M from "materialize-css";
import setAuthToken from "../utils/setAuthToken";

export const LoginAction = async (user,history) => {
    const data = user;
    console.log(data)
    try {
      const res = await axios.post(`http://localhost:5000/api/login`, data);
      const {token , user} = res.data.data;
        console.log(user);
      const authtoken = `Bearer ${token}`;

      localStorage.setItem("TOKEN_VALUE", token);
      setAuthToken(authtoken);

      M.toast({
        html: "User logged in",
        classes: "toast-valid",
      });
      return history("/user/dashboard");
    } catch(err) {
        return(console.log)
    }
}

export const getMe = async (navigate) => {
    localStorage.removeItem("TOKEN_VALUE")
    navigate('/auth/login')
}
