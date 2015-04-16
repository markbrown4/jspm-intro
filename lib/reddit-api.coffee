jsonp = require 'jsonp'

class RedditApi
  constructor: ->
    @url = "http://www.reddit.com/r/perfectLoops.json?jsonp=callbackFunction"

  load: ->
    new Promise (resolve, reject)=>
      jsonp @url, { param: 'jsonp' }, (err, data)->
        if err then reject(err) else resolve(data.data.children)

exports.RedditApi = new RedditApi()
