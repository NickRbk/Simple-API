const News = require('./../models/news');

module.exports = function saveNews(dataset, generalData) {
    return new Promise((resolve, reject) => {
        dataset.forEach(item => {
            let news = new News({
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
                news.rubrics.push({name: name['head']});
            });

            item.objects.forEach(object => {
                news.objects.push({
                    kind: object['type'],
                    name: object['name'],
                    rank: object['rank']
                });
            });

            news.save()
                .then(() => {
                    resolve('Your data saved successfully!');
                })
                .catch(() => {
                    reject('Error');
                });
        });
    });
};
