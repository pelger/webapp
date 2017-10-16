var restify = require('restify')
var conc = require('concordant')()


module.exports = function () {

  function createClient (name, cb) {
    conc.dns.resolve('_main._tcp.' + name + '.fourtheoremdemo.internal', function (err, result) {
      if (err) { console.log(err); return cb(err) }
      cb(err, restify.createJsonClient({url: 'http://' + result[0].host + ':' + result[0].port}))
    })
  }

  return {
    createClient: createClient
  }
}

