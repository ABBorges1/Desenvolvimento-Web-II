const http = require('http')
const servidor = require('./src/config/aplicativo.js')

require('./src/database/indexDb.js')

http.createServer(servidor).listen(servidor.get('porta'), function() {
    console.log('Servidor rodando na porta ' + server.get('url') + server.get('porta'))
})

