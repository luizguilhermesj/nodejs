var fs = require('fs');

module.exports = {
    hello: function(res) {
        res.end('Fucknyeah!');
    },
    world: function(res) {
        res.end('wooorllddd!');
    },
    html: function(res) {
        var index = fs.readFileSync('index.html');
        res.end(index);
    }
}