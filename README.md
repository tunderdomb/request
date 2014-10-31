Request.js
==========

Simple http request on the client side.
Inspired by [superagent](https://github.com/visionmedia/superagent).

## Why another ajax library?

I tell you why. There's no unopinionated library out there.
Either you have to pull in a whole all-in-one library just so you can call x endpoint,
or you have to build on from source because they don't provide distributed versions.

Superagent requires you to use component which in itself is opinionated.

Request requires you nothing.

## Install

    bower install request

## Usage

Minified and dev build are available in the `dest/` dir.

Request exposes only one global function, wait for it..`request`.
It's also browserify enabled, so you can just `require("request")` in the browser.

### Why no AMD?

I find them unnecessary bloat. Look at Grunt's source. They have to parse out AMD ceremony during build.
So no AMD, learn to use globals! They are not that evil.

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

## Licence

MIT Go run with it!