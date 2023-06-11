const router = require('express').Router();

router.get('/', (req, res) => {
    //from FE
    
    //to FE
    const result = {
        message: null,
        data: result
    }
    let statusCode = 200;

    //main
    console.log('메인작업');

    //send result
    res.status(statusCode).send(result);
});

module.exports = router;