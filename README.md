# node-simulator

### When APIs slow your front-end development down: record and replay HTTP responses like a boss.

## Overview

A showcase of how to use three other node modules:

    * replay (slightly forked)
    * express
    * http-proxy

Providing a way to stub out a back-end by simply running node-replay in record mode and invoking the requests that your application does or will do in the future.


## Setup

```
npm install git+:https://github.com/genesyslab/node-replay.git
```

## How to use

Create a server.js for all your static content (html/css/javascript etc..)

```
var express = require('simulator').express;

var app = express();
app.use(express.static(__dirname +'/public'));

app.listen(process.env.PORT || 3000);

```

Set up http-proxy to forward all api requests to your actual server.

```
var httpProxy = require('simulator').httpProxy

app.all('/api/*', function(req, res) {
    var proxy = new httpProxy.HttpProxy({target:{host:[YOUR_BACKEND_HOST], port:[YOUR_BACKEND_PORT]});
    proxy.proxyRequest(req, res);
});

```

Run in record mode to start saving responses from the server.  Invoke all requests that you would like to be stubbed out.  

```
REPLAY=record node server
```

Now run your stubbed out server.  
```
node server
```

You will notice it is not longer making any requests directly to your backend.  Instead, the fixtures are loaded.
