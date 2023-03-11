import axios from "axios";
import { getAuthToken } from "../utils/setAuthToken";
export const getBalance = async (bal) => {
    const data = bal;
    try {
      const res = await axios.get(`http://localhost:5000/api/balance/${data}`, 
        {
            headers: {
              Authorization: getAuthToken(),
            },
        })
      const balance = res.data;
      const dataBal = balance.map((data) => {
        return data.balance
      })

      return dataBal
    } catch(err) {
        return(console.log)
    }
}

export const getTransaction = async (key) => {
  const data = key;
  try {
    const res = await axios.get(`http://localhost:5000/api/transaction/${data}`, 
      {
          headers: {
            Authorization: getAuthToken(),
          },
      })
    const transaction = res.data;
    if(transaction) {
      return transaction
    } 
  } catch(err) {
      return(console.log)
  }
}


