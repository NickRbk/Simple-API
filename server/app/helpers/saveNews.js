const News = require('./../models/news');

module.exports = function saveNews(dataset, generalData) {
    const news = [];
    const promises = [];

    // Return promise to handle async operations
    return new Promise((resolve, reject) => {

        // **NOTE**
        // sometimes in json from SiteSputnik exist
        // partial objects without some essential key,
        // so we filter dataset before save
        const datasetFilter = dataset.filter(item => {
            if (item['url']) {
                return true;
            }
        });

        // Prepare objects to save and put them
        // to array of promises
        datasetFilter.forEach((item, i) => {
            news[i] = new News({
                routeApi: generalData.routeApi,
                heading: generalData.heading,
                dateProject: generalData.dateProject,
                timeProject: generalData.timeProject,
                title: item.title,
                author: item.author,
                description: item.description,
                date: item.date,
                time: item.time,
                domain: item.domain,
                url: item.url,
                rubrics: [],
                objects: []
            });

            item.rubrics.forEach(name => {
                news[i].rubrics.push({name: name['head']});
            });

            item.objects.forEach(object => {
                news[i].objects.push({
                    kind: object['type'],
                    name: object['name'],
                    rank: object['rank']
                });
            });

            promises.push( news[i].save() );
        });

        // Handle all promises in promise array
        // and resolve/reject final result
        Promise.all(promises)
            .then(() => resolve('Success'))
            .catch(e => reject(e.message))
    })
};
