'use strict';
var request = require('request');

const BATCH_SIZE = 10;
const PRELOAD_THRESHOLD = 20;
const IG_URL = 'https://api.instagram.com/9gag/media';

module.exports.getPosts = function(maxId) {
    return new Promise((resolve, reject) => {

        retrievePosts(maxId).then(
            result => resolve(result)
        ).catch(
            err => reject(err)
        ) 
    });
}

function searchById(id) {

    return element => element.id == id;
}

function retrievePosts(maxId) {

    let url = (maxId == 0) ? IG_URL : `${IG_URL}?max_id=${maxId}`;
    //console.log(url);
    return new Promise( (resolve, reject) => {
        request(url, function (error, response, body) {
            if (!error && response.statusCode === 200) {
                
                let result = JSON.parse(body).items;

                //console.log(result);
                resolve(JSON.parse(body).items);

            } else {

                reject(error);
            }
        });
    });

}
