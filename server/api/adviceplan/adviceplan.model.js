'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './adviceplan.events';

var AdviceplanSchema = new mongoose.Schema({
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  keteranganBgn: mongoose.Schema.Types.Mixed,
  hasilCek: mongoose.Schema.Types.Mixed,
  zonasi: mongoose.Schema.Types.Mixed
});

registerEvents(AdviceplanSchema);
export default mongoose.model('Adviceplan', AdviceplanSchema);
