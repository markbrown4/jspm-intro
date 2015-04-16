import RedditApi from './reddit-api.coffee!'
import ExtractGifs from './extract-gifs'
import DisplayGifs from './display-gifs'

RedditApi.RedditApi.load()
  .then(ExtractGifs)
  .then(DisplayGifs)
