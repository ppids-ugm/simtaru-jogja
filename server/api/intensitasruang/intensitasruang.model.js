'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './intensitasruang.events';

var IntensitasruangSchema = new mongoose.Schema({
  Kelas: String,
  Keterangan: String,
  Batas:{
    min: Number,
    max: Number
  },
  KDB: Object,
  Tinggi: Object,
  KLB: Object,
  KDH: Object
});

registerEvents(IntensitasruangSchema);
export default mongoose.model('Intensitasruang', IntensitasruangSchema);
