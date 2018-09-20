/**
 * Intensitasruang model events
 */

'use strict';

import {EventEmitter} from 'events';
var IntensitasruangEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
IntensitasruangEvents.setMaxListeners(0);

// Model events
var events = {
  save: 'save',
  remove: 'remove'
};

// Register the event emitter to the model events
function registerEvents(Intensitasruang) {
  for(var e in events) {
    let event = events[e];
    Intensitasruang.post(e, emitEvent(event));
  }
}

function emitEvent(event) {
  return function(doc) {
    IntensitasruangEvents.emit(event + ':' + doc._id, doc);
    IntensitasruangEvents.emit(event, doc);
  };
}

export {registerEvents};
export default IntensitasruangEvents;
