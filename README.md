Request.js
==========

Simple http request on the client side.
Inspired by [superagent](https://github.com/visionmedia/superagent).

## Why another ajax library?

I tell you why. There's no unopinionated library out there.
Either you have to pull un a whole all-in-one library just so you can call x endpoint,
or you have to build on from source because they don't provide distributed versions.

Superagent requires you to use component which in itself is opinionated.

Request requires you nothing.

## Install

    bower install request

## Usage

Minified and dev build are available in the `dest/` dir.

Request exposes only one global function, wait for it..`request`.

### Why no AMD?

I find them unnecessary bloat. Look at Grunt's source. They have to parse out AMD ceremony during build.
So no AMD, learn to use globals! They are not that evil.

## Licence

MIT Go run with it!