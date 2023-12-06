var express = require("express")
var app = express()
app.use(express.static(__dirname + '/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
var port = process.env.port || 3000;


const cardList = [{
    title: 'car 1',
    path: 'images/car 1.jpeg',
    link: 'About Car 1',
    description: 'Description of Car 1'
},
{
    title: 'car 2',
    path: 'images/car 2.jpg',
    link: 'About Car 2',
    description: 'Description of Car 2'
}];


app.get('/api/projects', (req, res) => {
    res.json({ statusCode: 200, data: cardList, message: "Success" })
});

app.listen(port, () => {
    console.log("App listening to: " + port)
});
