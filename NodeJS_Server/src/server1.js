'use strict'
const {createServer} = require('http')

const data = JSON.stringify([
    {id: 'A1', name: 'Vacuum Cleaner', rrp: '99.99', info: 'The best vacuum cleaner.'},
    {id: 'A2', name: 'Leaf Blower', rrp: '303.33', info: 'The best leaf blower.'},
    {id: 'B1', name: 'Chocolate Bar', rrp: '22.40', info: 'Delicious Chocolate.'}
])

const server = createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Content-Type', 'application/json')
  res.end(data)
})

server.listen(3000)
