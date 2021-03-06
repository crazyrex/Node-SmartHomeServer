require('babel-register')({
    "presets": ["es2015", "react"]
});

const log = require('debug')('App:Boot');
const JsonCache = require('./src/JsonCache');
const App = require('./src/App');
const nconf = require('./config');


const appDir = `${require('path').dirname(require.main.filename)}/`;
const cache = new JsonCache(`${appDir}cache/`);
const app = new App(nconf, appDir, cache);

app.load().then(() => {
    return app.startServer();
}).fail(err => {
    log(err);
});
