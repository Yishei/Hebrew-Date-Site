const express = require('express');
const path = require('path');
const hebcal = require('hebcal');

const app = express();
const PORT = 8080;

const publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath));


app.get('/', (req, res, next) => {
    res.sendFile('index.html');
});


app.get('/hebrew-date/:date?', (req, res, next) => {
    const date = req.params.date;
    if(date){
        const dateArr = date.split('-');
        const year = dateArr[2];
        const month = dateArr[0]-1;
        const day = dateArr[1];
        res.send(hebcal.HDate(new Date(year, month, day)).toString('h'));
    } else {
        res.send(hebcal.HDate().toString('h'));
    }

});

app.listen(PORT, () => {
    console.log(`server on at port ${PORT}`);
});

