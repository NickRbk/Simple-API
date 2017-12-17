// ESSENTIAL APP CONFIG
require('./config/config');

// define our dependencies
const express = require('express'),
      bodyParser = require('body-parser');

// Start up connection to MongoDB
const {mongoose} = require('./app/db/mongoose');

// create server by express
const app = express(),
      port = process.env.PORT;


app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));


// Create our API
const apiRouter = express.Router();
app.use('/api', apiRouter);

// save news from SS to MongoDB (POST http://localhost:7777/api/news)
apiRouter.route('/news')
    .post( (req, res) => {
        const dataset = req.body.data;

        const generalData = {
            routeApi: req.body['route-api'],
            heading: req.body['heading'],
            dateProject: req.body['date'],
            timeProject: req.body['time']
        };

        // Use Promise to handle error when saving data
        const saveNews = require('./app/helpers/saveNews');
        saveNews(dataset, generalData)
            .then(
                result => {
                    res.json({ message: result })
                },
                error => {
                    res.json({ message: error })
                }
            );
        //___________________________________________________

    });

// START THE SERVER
app.listen(port, () => console.log(`Server is up on port ${port}`));
// ______________________________________________________________