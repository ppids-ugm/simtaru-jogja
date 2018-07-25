'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './rdtrdata.events';

var RdtrdataSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

registerEvents(RdtrdataSchema);
export default mongoose.model('Rdtrdata', RdtrdataSchema);
