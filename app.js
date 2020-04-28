const express = require ("express");
const app = express();
const { PORT } = require ("./config");

// app.get("/", (req,res) => {
//         res.send("Hello this is my first API");
// })


// app.post("/", (req,res) => {
//     res.send("I try to use post");
// })


// app.put("/", (req,res) => {
//     res.send("Can this change or not ?");
// })


// app.delete("/", (req,res) => {
//     res.send("Are you sure for delete this ?");
// })


// app.patch("/", (req,res) => {
//     res.send("I try to use patch");
// })




// app.get("/diva", (req,res) => {
//     const name = "diva";
//     const array = [1,2,3,4,5];

//     for( let i = 0; i < array.length; i++) {
//         console.log(array[i], "for loop");
        
//     }

//     const result = array.map((element) => {
//         return element * 2
//     })

// })

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use("/", require("./routes"));
app.use("/users", require("./routes/users"));


app.listen(PORT, () => {
    console.log(`PORT is listen on PORT : ${PORT}`);
    
});