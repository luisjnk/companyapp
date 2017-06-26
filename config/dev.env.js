var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  APIURL: '"http://localhost:9000/api/companies/"',
  APIOWNERSURL: '"http://localhost:9000/api/owners/"'
})
