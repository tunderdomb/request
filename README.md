miniagent.js
==========

Previously request.js. Renamed because it clashed with the famous npm module.
So now it's available on npm too.

Simple http request on the client side.
Inspired by [superagent](https://github.com/visionmedia/superagent).

## Why another ajax library?

I tell you why. There's no unopinionated library out there.
Either you have to pull in a whole all-in-one library just so you can call x endpoint,
or you have to build on from source because they don't provide distributed versions.
Superagent requires you to use component which in itself is opinionated.
Request doesn't have a client side version. Well, it has a port..but it's not that elegant!
So there you have it.

## Install

    npm install request

or

    bower install request

## Usage

### With browserify

    var request = require("miniagent")

### With simple js

    <script type="text/javascript" src="<path-to-miniagent>/dist/request.js"></script>

or

    <script type="text/javascript" src="<path-to-miniagent>/dist/request.min.js"></script>

then

    var request = window.miniagent

Minified and dev build are available in the `dest/` dir.

## API

```js


// GET
request
  .get("http://updates.html5rocks.com")
  .query("property", "value")
  .query({
    property: "value"
    //"...": "..."
  })
  .cors()
  .timeout(2000) // ms
  .end(function( err, resp ){
    console.log(resp.body.match('<title>(.*)?</title>')[1], resp)
  })

// POST
request
  .post("/api/endpoint")
  .contentType("text/html")
  .accept("text/html")
  .header("content-type", "text/html")
  .header({
    "Accept": "text/html"
    //"...": "..."
  })
  .send({
    property: "value"
    //"...": "..."
  })
  .form(HTMLFormElement|FormData)
  .attach("field", File, "fileName")
  .withCredentials() // Enable transmission of cookies with x-domain requests.
  .auth("user", "pass") // -> this.header("Authorization", "Basic" + btoa(user + ":" + pass))
  .end(function( err, resp ){
    console.log(resp.body)
  })

// METHODS
methods = [
  'get', 'post', 'put', 'head', 'delete', 'options', 'trace', 'copy', 'lock', 'mkcol',
  'move', 'propfind', 'proppatch', 'unlock', 'report', 'mkactivity', 'checkout',
  'merge', 'm-search', 'notify', 'subscribe', 'unsubscribe', 'patch'
]

// MIME SHORTHANDS
mime["html"] = mime["text"] = "text/html"
mime["json"] = "application/json"
mime["xml"] = "application/xml"
mime["urlencoded"] = mime["form"] = mime["url"] = "application/x-www-form-urlencoded"
mime["form-data"] = mime["multipart"] = "multipart/form-data"

```

For more details, check out the source.

## Licence

MIT Go run with it!