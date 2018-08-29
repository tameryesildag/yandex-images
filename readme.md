```bash
npm install yandex-images
```

#### .Search( text, family-search, callback)
```javascript
const yandeximages = require("yandex-images");
yandeximages.Search("Car", false, function(url){
    console.log(url);
    //=> https://im0-tub-tr.yandex.net/i?id=0ac345bf725bbefad02f3e028bab589d&n=13
})
```