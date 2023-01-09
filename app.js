const express = require('express');
const path = require('path');
const hebcal = require('hebcal');

const app = express();
const PORT = 8080;

const publicPath = path.join(__dirname, '/public');
app.use(express.static(publicPath));


app.get('/stockMarket', (req, res, next) => {
    res.sendFile(path.join(publicPath, '/html/index.html'));
});


app.get('/hebrew-date/:date?', (req, res, next) => {
    const date = req.params.date;
    if(date){
        res.send(hebcal.HDate(new Date(date)).toString('h'));
    } else {
        res.send(hebcal.HDate().toString('h'));
    }

});

app.listen(PORT, () => {
    console.log(`server on at port ${PORT}`);
});

