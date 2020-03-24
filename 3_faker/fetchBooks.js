var axios = require('axios');

axios.get('http://localhost:3001/authors?authorId=97')
    .then((response)=>{console.log(response.data)})
    .catch((err)=>{console.log('problem\n'+err)});
