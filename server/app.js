const config = require('../config')

const Koa = require('koa');
const app = new Koa()

app.listen(config.database.PORT)
console.log(`start at port${config.database.PORT}`)