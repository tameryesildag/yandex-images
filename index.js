const cheerio = require("cheerio");
var https = require("https");

module.exports.Search = function (text, familysearch = false, callback) {
    var url;
    if (familysearch) {
        url = "https://yandex.com.tr/gorsel/search?text=" + text + "&family=yes";
    } else {
        url = "https://yandex.com.tr/gorsel/search?text=" + text;
    }
    https.get(url, (res) => {
        var body = "";
        res.on("data", (d) => {
            body += d;
        })
        res.on("end", function () {
            var $ = cheerio.load(body);
            var imageurl = "https:" + $(".serp-item__thumb").attr("src");
            callback(imageurl);
        })
    })
}