'use strict'

module.exports = async function (fastify, opts) {
    fastify.get('/', async function (request, reply) {
        return [
            {id: 'A1', name: 'Vacuum Cleaner', rrp: '99.99', info: 'The best vacuum cleaner.'},
            {id: 'A2', name: 'Leaf Blower', rrp: '303.33', info: 'The best leaf blower.'}
        ]
    })
}
