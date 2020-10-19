const http = require('http');
const express = require('express');
const history = require('connect-history-api-fallback');
const bodyParser = require('body-parser');
const compression = require('compression');
const app = express();
const {spawn} = require('child_process');
const createHandler = require('github-webhook-handler');
const handler = createHandler({
    path: '/push',
    secret: 'jianfeng19901009'
});
app.get('/', (req, res) => {
    res.redirect('/admin/index');
});
// app.post('/push', function(req, res) {
//     handler(req,res, (err) => {
//         console.log(err)
//         res.statusCode = 200;
//         res.end("good");
//     });
//     // res.statusCode = 404;
//     // res.end("no such location");
// })
http.createServer(function (req, res) {
    handler(req, res, function (err) {
      res.statusCode = 404
      res.end('no such location')
    })
  }).listen(3010)
app.use(history({
    index: '/index.html'
}));
const staticFileMiddleware = express.static('dist');
app.use(staticFileMiddleware);
app.use(bodyParser.json({
    limit: '10MB'
}))
app.use(
    bodyParser.urlencoded({
        extended: false
    })
)
// 启动gzip
app.use(compression());
// js css img icon等设置缓存
app.use(function (req, res, next) {
    if (req.url.match(/^\/.*\.(js|css|jpg|png|gif|ico)$/)) {
        res.setHeader('Cache-Control', 'public, max-age=864000'); // cache header
    }
    next();
});


// http.createServer((req, res) => {
//     handler(req,res, (err) => {
//         console.log(err)
//         res.statusCode = 404;
//         res.end("no such location");
//     });
// }).listen(3000);
http.createServer(app).listen(3000);
// app.get('/push', function(req, res) {
//     handler(req,res, (err) => {
//         console.log(err)
//         res.statusCode = 404;
//         res.end("no such location");
//     });
// })
handler.on('error', (err) => {
    console.error('Error:', err.message);
});
handler.on('push', (event) => {
    console.log('Received a push event for %s to %s', event.payload.repository.name, event.payload.ref);
    runCommand('sh', ['./deploy.sh'], (txt) => {
        console.log(txt)
    });
});
function runCommand(cmd, args, callback) {
    const child = spawn(cmd, args);
    var response = '';
    child.stdout.on('data', (buffer) => {
        response += buffer.toString();
    });
    child.stdout.on('end', () => {
        callback(response);
    });
}