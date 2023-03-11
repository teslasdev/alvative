const Transaction = async (req,resp) => {
    try {
        const { key } = req.params;

        var axios = require('axios');
        var config = {
          method: 'get',
          maxBodyLength: Infinity,
          url: 'https://api.paystack.co/transaction',
          headers: { 
            Authorization: `Bearer ${key}`,
            'Cookie': 'sails.sid=s%3AyzpLUYXKibXmmL5SZrcajEuxzrSfYtPF.s1aRH55pQBXmbgD0aMMngTnHU2BBCzQ91MjMjSFgQzM'
          }
        };
      
        axios(config)
          .then(function (response) {
            resp.status(201).json(response.data.data)
          })
          .catch(function (error) {
            console.log(error);
          });
    } catch (error) {
      console.log(error);
    }
}
module.exports = Transaction;
