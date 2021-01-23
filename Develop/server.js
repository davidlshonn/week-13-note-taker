const express = require("express");
const htmlRouter = require("./routes/htmlRoutes")

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(express.urlencoded({extended : true}));

app.use(express.static("public"));

app.use("/", htmlRouter); 


app.listen(PORT, () =>{
    console.log("Server is now running...")
})