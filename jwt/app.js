const jwt = require('jsonwebtoken');

const payload = {
    user: "callan",
    id: "123465"    
}

const secretKey = '87CB9E5B-7C0B-4717-8D14-CCC3C41B6BBB'; //GUID

const options = {
    expiresIn: '1h'
}


jwt.sign(payload, secretKey, options, (err, token) => {
    console.log(token);
})


const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiY2FsbGFuIiwiaWQiOiIxMjM0NjUiLCJpYXQiOjE1OTUyMzYwNTYsImV4cCI6MTU5NTIzNjA1Nn0.ERqjrMtUL2W2ocjf-etgK1_PEs6etOdjqUGyz1kWiZQ';
const nooshinToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiTm9vc2hpbiIsImlkIjoiNjU0MzIxIiwiaWF0IjoxNTk1MjM1NDM4LCJleHAiOjE1OTUyMzkwMzh9.aavWbOVaQxh1aYAJWz_jnSObMRCqxTtyXS-QT-SjzJ0';


jwt.verify(token, secretKey, {algorithms: ["HS256"]}, (err, decoded) => {
    if(!err){
        console.log(decoded);
    }   
    else {
        console.log(err);
    }
})

//const decoded = jwt.decode(nooshinToken);
//console.log(decoded);

