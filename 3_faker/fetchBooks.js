var axios = require('axios');

axios.get('127.0.0.1:3001/authors?authorId=97')
    .then((response)=>{console.log(response.data)})
    .catch((err)=>{console.log('problem\n'+err)});
