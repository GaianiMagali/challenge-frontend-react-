const router = require('express').Router();
const axios = require('axios');

router.get("/search/:name", async (req, res) => {
    const { name } = req.params;

    try {
        const result = await axios.get(`https://superheroapi.com/api/4390410834384837/search/${name}`);

        res.json(result.data)

    } catch (error) {
        console.error(error);
    }

});


module.exports = router;