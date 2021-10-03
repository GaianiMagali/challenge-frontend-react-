const express = require("express");
const app = express();
const cors = require("cors");
const searchRoute = require("./routes/search");
const port = 8080;

app.use(express.json());
app.use(cors());
app.use("/", searchRoute);


app.listen(port, () => {
    console.log("Backend server is running!");
});




// const express = require('express');
// const app = express();
// app.use(express.json());
// const axios = require('axios');
// const port = 8080;
// const cors = require("cors");

// app.use(cors());

// app.use('/search', async (req, res) => {
//     const { name } = req.params;
//     // const url = `/api/4390410834384837/search/${name}`;
//     console.log(req, "reqqqq");

//     try {
//         const result = await axios.get(`https://superheroapi.com"/api/4390410834384837/search/${name}`);

//         console.log(result);
//         res.json(req);

//     } catch (error) {
//         console.error(error);
//     }
// });

// app.listen(port, () => {
//     console.log(`Example app listening at http://localhost:${port}`);
// });
