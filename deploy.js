const http = require('http');
const {spawn} = require('child_process');
const createHandler = require('github-webhook-handler');
const handler = createHandler({
    path: '/admin/push',
    secret: 'jianfeng19901009'
});
http.createServer((req, res) => {
    handler(req,res, (err) => {
        console.log(err)
        res.statusCode = 404;
        res.end("no such location");
    });
}).listen(3000);
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