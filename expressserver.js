var express = require('express');
const app = express();
const port = 9980;

app.get('/',(req,res) => {
    res.send('Running with exxpress')
})

app.listen(port, function(){
    console.log(`Server is running on port ${port}`)
});