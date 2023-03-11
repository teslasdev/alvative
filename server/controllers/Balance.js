const Balance = async (req,resp) => {
    try {
        const { key } = req.params;

        var axios = require('axios');
        var config = {
          method: 'get',
          maxBodyLength: Infinity,
          url: 'https://api.paystack.co/balance',
          headers: { 
            Authorization: `Bearer ${key}`
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
module.exports = Balance;
