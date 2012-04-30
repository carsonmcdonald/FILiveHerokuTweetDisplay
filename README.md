## Install

If you aren't going to modify this app you will also need to install [the tweet capture app](https://github.com/carsonmcdonald/FILiveHerokuTweetScrape) as well. You will also need to pull the mongodb information from the configuration for that app, assuming you are in the directory you deployed from you can do that with this command: ```heroku config | grep MONGOLAB_URI```

* Get your Heroku environment set up, see [Heroku Quickstart](https://devcenter.heroku.com/articles/quickstart)
* Clone this repo: 
  ```git clone https://github.com/carsonmcdonald/FILiveHerokuTweetDisplay.git```
* Change into the repo dir: 
  ```cd FILiveHerokuTweetDisplay```
* Create the Heroku setup: 
  ```heroku create --stack cedar```
* Add your mongodb user information from:
  ```heroku config:add MONGOLAB_URI=<mongodb information>```
* Deploy to heroku:
  ```git push heroku master```

You may also find the following article of use:

[https://devcenter.heroku.com/articles/realtime-polyglot-app-node-ruby-mongodb-socketio](https://devcenter.heroku.com/articles/realtime-polyglot-app-node-ruby-mongodb-socketio)

## License

Copyright (c) 2012 Carson McDonald

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

