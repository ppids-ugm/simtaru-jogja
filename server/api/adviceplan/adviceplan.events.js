/**
 * Adviceplan model events
 */

'use strict';

import {EventEmitter} from 'events';
var AdviceplanEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
AdviceplanEvents.setMaxListeners(0);

// Model events
var events = {
  save: 'save',
  remove: 'remove'
};

// Register the event emitter to the model events
function registerEvents(Adviceplan) {
  for(var e in events) {
    let event = events[e];
    Adviceplan.post(e, emitEvent(event));
  }
}

function emitEvent(event) {
  return function(doc) {
    AdviceplanEvents.emit(event + ':' + doc._id, doc);
    AdviceplanEvents.emit(event, doc);
  };
}

export {registerEvents};
export default AdviceplanEvents;
