const express = require('express');
const app = express();

app.use(express.static(__dirname + '/www',{extensions: ['html']}));

app.listen(3000,() => {
    console.log('app listening on port 3000')
});
