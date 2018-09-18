'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './skrk.events';

var SkrkSchema = new mongoose.Schema({
  Zonasi: String,
  Kegiatan: String,
  skrk: Object
});

registerEvents(SkrkSchema);
export default mongoose.model('Skrk', SkrkSchema);
