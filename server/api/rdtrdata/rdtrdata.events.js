/**
 * Rdtrdata model events
 */

'use strict';

import {EventEmitter} from 'events';
var RdtrdataEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
RdtrdataEvents.setMaxListeners(0);

// Model events
var events = {
  save: 'save',
  remove: 'remove'
};

// Register the event emitter to the model events
function registerEvents(Rdtrdata) {
  for(var e in events) {
    let event = events[e];
    Rdtrdata.post(e, emitEvent(event));
  }
}

function emitEvent(event) {
  return function(doc) {
    RdtrdataEvents.emit(event + ':' + doc._id, doc);
    RdtrdataEvents.emit(event, doc);
  };
}

export {registerEvents};
export default RdtrdataEvents;
