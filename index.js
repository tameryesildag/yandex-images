const cheerio = require("cheerio");
var https = require("https");

module.exports.Search = function(text, callback){
    var imageurl;
    https.get("https://www.yandex.com/images/search?text=" + text, (res) => {
        var body = "";
        res.on("data", (d) => {
            body += d;
        })
        res.on("end", function(){
            var $ = cheerio.load(body);
            imageurl = "https:" + $(".serp-item__thumb").attr("src");
            callback(imageurl);
        })
    })
}