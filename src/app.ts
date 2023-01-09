const express:any = require("express");
const app:any = express();

const port:number = 8080;

app.use(express.static(__dirname + '/public'));

app.get("/",(req:any, res:any) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => {
    console.log("server is work!!!");
});
