var express = require('express')
var router = express.Router()
var Subscriber = require('../database/models/sub');
// const sub = require('../database/models/sub');
router.put('/', async function (req, res) {
    const subscribers = await Subscriber.find();

    console.log(subscribers);
    res.send("k")
});
router.get('/', async (req, res) => {
    const subscriber = new Subscriber({
        name: "req.body.name1",
        subscribedChannel: "1req.body.subscribedChannel",
        test: "test"
    })

    try {
        const newSubscriber = await subscriber.save()
        res.status(201).json(newSubscriber)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})


module.exports = { router }