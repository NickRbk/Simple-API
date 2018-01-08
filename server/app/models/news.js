const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Set Schema for out data
const NewsSchema = new Schema({
    routeApi: String,
    heading: String,
    dateProject: String,
    timeProject: String,
    title: String,
    date: String,
    time: String,
    author: String,
    description: String,
    rubrics: [{
        name: String
    }],
    objects: [{
        kind: String,
        name: String,
        rank: String
    }],
    domain: String,
    url: String
});

const News = mongoose.model('news', NewsSchema);

module.exports = News;
