console.log('😇 L-1 in index.js=> ', 'W3School learning..')

import events from 'events'

const eventsEmitter = new events.EventEmitter()
const onGreeting = () => {
  console.log('👋🏻 Greeting to you..')
}

eventsEmitter.on('greet', onGreeting)
eventsEmitter.emit('greet')
