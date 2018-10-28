'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './adviceplan.events';

var AdviceplanSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

registerEvents(AdviceplanSchema);
export default mongoose.model('Adviceplan', AdviceplanSchema);
