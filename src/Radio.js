module.exports = Radio

function Radio(){}

Radio.prototype.listen = Radio.prototype.on = Radio.prototype.addListener = listen
Radio.prototype.unListen = Radio.prototype.off = Radio.prototype.removeListener = unListen
Radio.prototype.broadcast = Radio.prototype.emit = Radio.prototype.trigger = broadcast
Radio.prototype.listenOnce = Radio.prototype.once = once
Radio.prototype.hasListener = Radio.prototype.listeners = hasListener

function listen( channel, listener ){
  this.channels = this.channels || {};
  (this.channels[channel] = this.channels[channel] || []).push(listener)
  return this
}

function unListen( channel, listener ){
  // remove all channels
  if ( !channel ) this.channels = {}
  // reset a channel
  else if ( !listener ) this.channels[channel] = []
  // remove a listener
  else {
    channel = this.channels[channel]
    if ( channel ) {
      var i = channel.indexOf(listener)
      if ( ~i ) {
        channel.splice(i, 1)
      }
    }
  }
  return this
}

function broadcast( channel, message ){
  message = [].slice.call(arguments, 1)
  channel = this.channels[channel]
  if ( channel ) {
    channel.forEach(function ( listener ){
      listener.apply(this, message)
    }, this)
  }
  return this
}

function once( channel, listener ){
  function proxy(){
    unListen.call(this, channel, proxy)
    listener.apply(this, arguments)
  }
  listen.call(this, channel, proxy)
  return this
}

function hasListener( channel, listener ){
  channel = this.channels[channel]
  return channel && listener && !!~channel.indexOf(listener)
}
