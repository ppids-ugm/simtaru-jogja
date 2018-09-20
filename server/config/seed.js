/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Thing from '../api/thing/thing.model';
import User from '../api/user/user.model';
import Skrk from '../api/skrk/skrk.model';
import Intensitasruang from '../api/intensitasruang/intensitasruang.model';
import config from './environment/';

export default function seedDatabaseIfNeeded() {
  if (config.seedDB) {
    Thing.find({}).remove()
      .then(() => {
        let thing = Thing.create({
          name: 'Development Tools',
          info: 'Integration with popular tools such as Webpack, Gulp, Babel, TypeScript, Karma, ' +
            'Mocha, ESLint, Node Inspector, Livereload, Protractor, Pug, ' +
            'Stylus, Sass, and Less.'
        });
        return thing;
      })
      .then(() => console.log('finished populating things'))
      .catch(err => console.log('error populating things', err));

    User.find({}).remove()
      .then(() => {
        User.create({
            provider: 'local',
            name: 'Tamu ',
            email: 'tamu@simtaru.com',
            password: 'tamu'
          }, {
            provider: 'local',
            role: 'admin',
            name: 'Dany Laksono',
            email: 'admin@simtaru.com',
            password: 'admin'
          })
          .then(() => console.log('finished populating users'))
          .catch(err => console.log('error populating users', err));
      });

    Skrk.find({}).remove()
      .then(() => {
        Skrk.create({
            "Zonasi": "Penghijauan",
            "Kegiatan": "Taman Lingkungan",
            skrk: {
              "SC": "I",
              "RTH-1": "I",
              "RTH-2": "I",
              "RTH-3": "I",
              "PS": "I",
              "R-1": "I",
              "R-2": "I",
              "K": "I",
              "KT": "I",
              "SPU-1": "I",
              "SPU-2": "I",
              "SPU-3": "I",
              "SPU-4": "I",
              "I": "I",
              "PL": "I"
            }
          }, {
            "Zonasi": "Penghijauan",
            "Kegiatan": "Taman Kota",
            skrk: {
              "SC": "I",
              "RTH-1": "I",
              "RTH-2": "I",
              "RTH-3": "I",
              "PS": "I",
              "R-1": "I",
              "R-2": "I",
              "K": "I",
              "KT": "I",
              "SPU-1": "I",
              "SPU-2": "I",
              "SPU-3": "I",
              "SPU-4": "I",
              "I": "I",
              "PL": "I"
            }
          }, {
            "Zonasi": "Penghijauan",
            "Kegiatan": "Taman Makam Pahlawan",
            skrk: {
              "SC": "X",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "I",
              "PS": "X",
              "R-1": "X",
              "R-2": "X",
              "K": "X",
              "KT": "X",
              "SPU-1": "X",
              "SPU-2": "X",
              "SPU-3": "X",
              "SPU-4": "X",
              "I": "X",
              "PL": "X"
            }
          }, {
            "Zonasi": "Penghijauan",
            "Kegiatan": "Taman Pemakaman Umum",
            skrk: {
              "SC": "X",
              "RTH-1": "X",
              "RTH-2": "I",
              "RTH-3": "I",
              "PS": "X",
              "R-1": "I",
              "R-2": "I",
              "K": "I",
              "KT": "X",
              "SPU-1": "X",
              "SPU-2": "X",
              "SPU-3": "I",
              "SPU-4": "X",
              "I": "I",
              "PL": "I"
            }
          }, {
            "Zonasi": "Penghijauan",
            "Kegiatan": "Hutan Kota",
            skrk: {
              "SC": "I",
              "RTH-1": "I",
              "RTH-2": "I",
              "RTH-3": "I",
              "PS": "I",
              "R-1": "I",
              "R-2": "I",
              "K": "I",
              "KT": "I",
              "SPU-1": "I",
              "SPU-2": "I",
              "SPU-3": "I",
              "SPU-4": "I",
              "I": "I",
              "PL": "I"
            }
          }, {
            "Zonasi": "Penghijauan",
            "Kegiatan": "Alun-alun",
            skrk: {
              "SC": "I",
              "RTH-1": "I",
              "RTH-2": "I",
              "RTH-3": "I",
              "PS": "X",
              "R-1": "I",
              "R-2": "I",
              "K": "I",
              "KT": "I",
              "SPU-1": "I",
              "SPU-2": "I",
              "SPU-3": "I",
              "SPU-4": "I",
              "I": "I",
              "PL": "I"
            }
          }, {
            "Zonasi": "Penghijauan",
            "Kegiatan": "Ruang Evakuasi Bencana",
            skrk: {
              "SC": "X",
              "RTH-1": "X",
              "RTH-2": "I",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "I",
              "R-2": "I",
              "K": "I",
              "KT": "I",
              "SPU-1": "I",
              "SPU-2": "I",
              "SPU-3": "I",
              "SPU-4": "I",
              "I": "I",
              "PL": "I"
            }
          }, {
            "Zonasi": "Hunian",
            "Kegiatan": "Rumah Sangat Kecil",
            skrk: {
              "SC": "B",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "I",
              "R-2": "I",
              "K": "I",
              "KT": "I",
              "SPU-1": "B",
              "SPU-2": "X",
              "SPU-3": "B",
              "SPU-4": "B",
              "I": "I",
              "PL": "X"
            }
          }, {
            "Zonasi": "Hunian",
            "Kegiatan": "Rumah Kecil",
            skrk: {
              "SC": "B",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "I",
              "R-2": "I",
              "K": "I",
              "KT": "I",
              "SPU-1": "B",
              "SPU-2": "X",
              "SPU-3": "B",
              "SPU-4": "B",
              "I": "I",
              "PL": "X"
            }
          }, {
            "Zonasi": "Hunian",
            "Kegiatan": "Rumah Sedang",
            skrk: {
              "SC": "B",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "I",
              "R-2": "I",
              "K": "I",
              "KT": "I",
              "SPU-1": "B",
              "SPU-2": "X",
              "SPU-3": "B",
              "SPU-4": "B",
              "I": "I",
              "PL": "X"
            }
          }, {
            "Zonasi": "Hunian",
            "Kegiatan": "Rumah Besar",
            skrk: {
              "SC": "B",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "I",
              "R-2": "I",
              "K": "I",
              "KT": "I",
              "SPU-1": "B",
              "SPU-2": "X",
              "SPU-3": "B",
              "SPU-4": "B",
              "I": "I",
              "PL": "X"
            }
          }, {
            "Zonasi": "Hunian",
            "Kegiatan": "Rumah Susun",
            skrk: {
              "SC": "X",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "I",
              "R-2": "I",
              "K": "I",
              "KT": "B",
              "SPU-1": "X",
              "SPU-2": "X",
              "SPU-3": "X",
              "SPU-4": "X",
              "I": "I",
              "PL": "X"
            }
          }, {
            "Zonasi": "Hunian",
            "Kegiatan": "Mess Karyawan",
            skrk: {
              "SC": "X",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "I",
              "R-2": "I",
              "K": "I",
              "KT": "I",
              "SPU-1": "I",
              "SPU-2": "B",
              "SPU-3": "B",
              "SPU-4": "B",
              "I": "I",
              "PL": "B"
            }
          }, {
            "Zonasi": "Hunian",
            "Kegiatan": "Apartemen",
            skrk: {
              "SC": "X",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "I",
              "R-2": "I",
              "K": "I",
              "KT": "T",
              "SPU-1": "T",
              "SPU-2": "X",
              "SPU-3": "X",
              "SPU-4": "X",
              "I": "I",
              "PL": "X"
            }
          }, {
            "Zonasi": "Hunian",
            "Kegiatan": "Asrama Mahasiswa/Pelajar",
            skrk: {
              "SC": "X",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "I",
              "R-2": "I",
              "K": "I",
              "KT": "B",
              "SPU-1": "I",
              "SPU-2": "X",
              "SPU-3": "B",
              "SPU-4": "X",
              "I": "I",
              "PL": "B"
            }
          }, {
            "Zonasi": "Hunian",
            "Kegiatan": "Rumah Kos",
            skrk: {
              "SC": "T",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "I",
              "R-2": "I",
              "K": "I",
              "KT": "B",
              "SPU-1": "I",
              "SPU-2": "X",
              "SPU-3": "B",
              "SPU-4": "X",
              "I": "I",
              "PL": "B"
            }
          }, {
            "Zonasi": "Hunian",
            "Kegiatan": "Rumah Dinas Swasta",
            skrk: {
              "SC": "T",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "I",
              "R-2": "I",
              "K": "I",
              "KT": "I",
              "SPU-1": "I",
              "SPU-2": "X",
              "SPU-3": "I",
              "SPU-4": "I",
              "I": "I",
              "PL": "B"
            }
          }, {
            "Zonasi": "Hunian",
            "Kegiatan": "Rumah Dinas Negeri",
            skrk: {
              "SC": "T",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "I",
              "R-2": "I",
              "K": "I",
              "KT": "I",
              "SPU-1": "I",
              "SPU-2": "I",
              "SPU-3": "I",
              "SPU-4": "I",
              "I": "I",
              "PL": "B"
            }
          }, {
            "Zonasi": "Hunian",
            "Kegiatan": "Rumah Jabatan",
            skrk: {
              "SC": "T",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "I",
              "R-2": "I",
              "K": "I",
              "KT": "I",
              "SPU-1": "I",
              "SPU-2": "I",
              "SPU-3": "I",
              "SPU-4": "I",
              "I": "I",
              "PL": "B"
            }
          }, {
            "Zonasi": "Hunian",
            "Kegiatan": "Rumah Mewah",
            skrk: {
              "SC": "B",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "I",
              "R-2": "I",
              "K": "I",
              "KT": "I",
              "SPU-1": "B",
              "SPU-2": "X",
              "SPU-3": "B",
              "SPU-4": "X",
              "I": "I",
              "PL": "B"
            }
          }, {
            "Zonasi": "Hunian",
            "Kegiatan": "Rumah Menengah",
            skrk: {
              "SC": "B",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "I",
              "R-2": "I",
              "K": "I",
              "KT": "I",
              "SPU-1": "I",
              "SPU-2": "X",
              "SPU-3": "I",
              "SPU-4": "I",
              "I": "I",
              "PL": "I"
            }
          }, {
            "Zonasi": "Hunian",
            "Kegiatan": "Rumah Sederhana",
            skrk: {
              "SC": "B",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "I",
              "R-2": "I",
              "K": "I",
              "KT": "I",
              "SPU-1": "I",
              "SPU-2": "X",
              "SPU-3": "I",
              "SPU-4": "I",
              "I": "I",
              "PL": "I"
            }
          }, {
            "Zonasi": "Hunian",
            "Kegiatan": "Panti Jompo",
            skrk: {
              "SC": "B",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "I",
              "R-2": "I",
              "K": "I",
              "KT": "I",
              "SPU-1": "B",
              "SPU-2": "X",
              "SPU-3": "I",
              "SPU-4": "X",
              "I": "X",
              "PL": "B"
            }
          }, {
            "Zonasi": "Hunian",
            "Kegiatan": "Pusat Rehabilitasi",
            skrk: {
              "SC": "B",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "I",
              "R-2": "I",
              "K": "I",
              "KT": "I",
              "SPU-1": "B",
              "SPU-2": "X",
              "SPU-3": "I",
              "SPU-4": "X",
              "I": "X",
              "PL": "B"
            }
          }, {
            "Zonasi": "Hunian",
            "Kegiatan": "Panti Asuhan",
            skrk: {
              "SC": "B",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "I",
              "R-2": "I",
              "K": "I",
              "KT": "I",
              "SPU-1": "B",
              "SPU-2": "X",
              "SPU-3": "I",
              "SPU-4": "X",
              "I": "X",
              "PL": "B"
            }
          }, {
            "Zonasi": "Perdagangan",
            "Kegiatan": "Rumah Toko (Ruko)",
            skrk: {
              "SC": "T",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "B",
              "R-2": "B",
              "K": "I",
              "KT": "B",
              "SPU-1": "X",
              "SPU-2": "X",
              "SPU-3": "X",
              "SPU-4": "X",
              "I": "I",
              "PL": "B"
            }
          }, {
            "Zonasi": "Perdagangan",
            "Kegiatan": "Rumah Kantor (Rukan)",
            skrk: {
              "SC": "T",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "B",
              "R-2": "B",
              "K": "I",
              "KT": "B",
              "SPU-1": "X",
              "SPU-2": "X",
              "SPU-3": "X",
              "SPU-4": "X",
              "I": "I",
              "PL": "B"
            }
          }, {
            "Zonasi": "Perdagangan",
            "Kegiatan": "Toko",
            skrk: {
              "SC": "T",
              "RTH-1": "B",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "T",
              "R-2": "T",
              "K": "I",
              "KT": "B",
              "SPU-1": "B",
              "SPU-2": "T",
              "SPU-3": "T",
              "SPU-4": "T",
              "I": "T",
              "PL": "T"
            }
          }, {
            "Zonasi": "Perdagangan",
            "Kegiatan": "Pertokoan",
            skrk: {
              "SC": "T",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "T",
              "R-2": "T",
              "K": "I",
              "KT": "B",
              "SPU-1": "B",
              "SPU-2": "T",
              "SPU-3": "T",
              "SPU-4": "T",
              "I": "T",
              "PL": "T"
            }
          }, {
            "Zonasi": "Perdagangan",
            "Kegiatan": "Pasar Induk",
            skrk: {
              "SC": "X",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "X",
              "R-2": "X",
              "K": "I",
              "KT": "X",
              "SPU-1": "X",
              "SPU-2": "X",
              "SPU-3": "X",
              "SPU-4": "X",
              "I": "T",
              "PL": "T"
            }
          }, {
            "Zonasi": "Perdagangan",
            "Kegiatan": "Pasar Grosir",
            skrk: {
              "SC": "X",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "X",
              "R-2": "X",
              "K": "I",
              "KT": "X",
              "SPU-1": "X",
              "SPU-2": "X",
              "SPU-3": "X",
              "SPU-4": "X",
              "I": "T",
              "PL": "T"
            }
          }, {
            "Zonasi": "Perdagangan",
            "Kegiatan": "Pasar Tradisional",
            skrk: {
              "SC": "X",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "B",
              "R-2": "B",
              "K": "I",
              "KT": "X",
              "SPU-1": "X",
              "SPU-2": "X",
              "SPU-3": "X",
              "SPU-4": "X",
              "I": "T",
              "PL": "T"
            }
          }, {
            "Zonasi": "Perdagangan",
            "Kegiatan": "Pasar Lingkungan/musiman",
            skrk: {
              "SC": "X",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "B",
              "R-2": "B",
              "K": "I",
              "KT": "B",
              "SPU-1": "B",
              "SPU-2": "X",
              "SPU-3": "T",
              "SPU-4": "T",
              "I": "T",
              "PL": "T"
            }
          }, {
            "Zonasi": "Perdagangan",
            "Kegiatan": "Pusat Perbelanjaan/Mall/Plaza",
            skrk: {
              "SC": "X",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "X",
              "R-2": "X",
              "K": "I",
              "KT": "X",
              "SPU-1": "X",
              "SPU-2": "X",
              "SPU-3": "X",
              "SPU-4": "X",
              "I": "X",
              "PL": "X"
            }
          }, {
            "Zonasi": "Perdagangan",
            "Kegiatan": "Hypermarket",
            skrk: {
              "SC": "X",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "X",
              "R-2": "X",
              "K": "I",
              "KT": "X",
              "SPU-1": "X",
              "SPU-2": "X",
              "SPU-3": "X",
              "SPU-4": "X",
              "I": "X",
              "PL": "X"
            }
          }, {
            "Zonasi": "Perdagangan",
            "Kegiatan": "Supermarket",
            skrk: {
              "SC": "X",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "X",
              "R-2": "X",
              "K": "I",
              "KT": "X",
              "SPU-1": "X",
              "SPU-2": "X",
              "SPU-3": "X",
              "SPU-4": "X",
              "I": "X",
              "PL": "X"
            }
          }, {
            "Zonasi": "Perdagangan",
            "Kegiatan": "Minimarket",
            skrk: {
              "SC": "T",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "T",
              "R-2": "T",
              "K": "I",
              "KT": "T",
              "SPU-1": "T",
              "SPU-2": "T",
              "SPU-3": "T",
              "SPU-4": "T",
              "I": "T",
              "PL": "T"
            }
          }, {
            "Zonasi": "Perdagangan",
            "Kegiatan": "Toserba",
            skrk: {
              "SC": "X",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "X",
              "R-2": "X",
              "K": "I",
              "KT": "T",
              "SPU-1": "T",
              "SPU-2": "T",
              "SPU-3": "T",
              "SPU-4": "T",
              "I": "T",
              "PL": "X"
            }
          }, {
            "Zonasi": "Perdagangan",
            "Kegiatan": "PKL",
            skrk: {
              "SC": "T",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "B",
              "R-2": "B",
              "K": "I",
              "KT": "B",
              "SPU-1": "B",
              "SPU-2": "B",
              "SPU-3": "B",
              "SPU-4": "B",
              "I": "I",
              "PL": "B"
            }
          }, {
            "Zonasi": "Perhotelan",
            "Kegiatan": "Hotel Berbintang",
            skrk: {
              "SC": "X",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "T",
              "R-2": "T",
              "K": "I",
              "KT": "T",
              "SPU-1": "X",
              "SPU-2": "X",
              "SPU-3": "X",
              "SPU-4": "T",
              "I": "T",
              "PL": "X"
            }
          }, {
            "Zonasi": "Perhotelan",
            "Kegiatan": "Hotel Melati",
            skrk: {
              "SC": "X",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "T",
              "R-2": "T",
              "K": "I",
              "KT": "B",
              "SPU-1": "B",
              "SPU-2": "B",
              "SPU-3": "B",
              "SPU-4": "B",
              "I": "I",
              "PL": "B"
            }
          }, {
            "Zonasi": "Perhotelan",
            "Kegiatan": "Penginapan/Losmen",
            skrk: {
              "SC": "B",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "B",
              "R-2": "B",
              "K": "I",
              "KT": "B",
              "SPU-1": "B",
              "SPU-2": "B",
              "SPU-3": "B",
              "SPU-4": "B",
              "I": "I",
              "PL": "B"
            }
          }, {
            "Zonasi": "Perhotelan",
            "Kegiatan": "Guesthouse",
            skrk: {
              "SC": "B",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "B",
              "R-2": "B",
              "K": "I",
              "KT": "B",
              "SPU-1": "B",
              "SPU-2": "B",
              "SPU-3": "B",
              "SPU-4": "B",
              "I": "I",
              "PL": "B"
            }
          }, {
            "Zonasi": "Perhotelan",
            "Kegiatan": "Homestay",
            skrk: {
              "SC": "B",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "B",
              "R-2": "B",
              "K": "I",
              "KT": "B",
              "SPU-1": "B",
              "SPU-2": "B",
              "SPU-3": "B",
              "SPU-4": "B",
              "I": "I",
              "PL": "B"
            }
          }, {
            "Zonasi": "Perhotelan",
            "Kegiatan": "Kondominium Hotel (Kondotel)",
            skrk: {
              "SC": "X",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "T",
              "R-2": "T",
              "K": "I",
              "KT": "T",
              "SPU-1": "X",
              "SPU-2": "X",
              "SPU-3": "X",
              "SPU-4": "X",
              "I": "T",
              "PL": "X"
            }
          }, {
            "Zonasi": "Jasa",
            "Kegiatan": "Biro Perjalanan, Tour dan Travel",
            skrk: {
              "SC": "B",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "I",
              "R-2": "I",
              "K": "I",
              "KT": "I",
              "SPU-1": "X",
              "SPU-2": "I",
              "SPU-3": "X",
              "SPU-4": "I",
              "I": "I",
              "PL": "I"
            }
          }, {
            "Zonasi": "Jasa",
            "Kegiatan": "Biro Jasa Pengurusan Perijinan",
            skrk: {
              "SC": "B",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "I",
              "R-2": "I",
              "K": "I",
              "KT": "I",
              "SPU-1": "B",
              "SPU-2": "I",
              "SPU-3": "X",
              "SPU-4": "X",
              "I": "I",
              "PL": "I"
            }
          }, {
            "Zonasi": "Jasa",
            "Kegiatan": "Pengantaran/Kurir/pengiriman barang ekspedisi",
            skrk: {
              "SC": "B",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "I",
              "R-2": "I",
              "K": "I",
              "KT": "I",
              "SPU-1": "B",
              "SPU-2": "I",
              "SPU-3": "B",
              "SPU-4": "I",
              "I": "I",
              "PL": "I"
            }
          }, {
            "Zonasi": "Jasa",
            "Kegiatan": "Pangkas Rambut/Salon",
            skrk: {
              "SC": "B",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "I",
              "R-2": "I",
              "K": "I",
              "KT": "I",
              "SPU-1": "I",
              "SPU-2": "I",
              "SPU-3": "I",
              "SPU-4": "I",
              "I": "I",
              "PL": "I"
            }
          }, {
            "Zonasi": "Jasa",
            "Kegiatan": "Laundry",
            skrk: {
              "SC": "B",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "I",
              "R-2": "I",
              "K": "I",
              "KT": "I",
              "SPU-1": "I",
              "SPU-2": "I",
              "SPU-3": "I",
              "SPU-4": "I",
              "I": "I",
              "PL": "I"
            }
          }, {
            "Zonasi": "Jasa",
            "Kegiatan": "Penitipan Barang",
            skrk: {
              "SC": "T",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "I",
              "R-2": "I",
              "K": "I",
              "KT": "I",
              "SPU-1": "X",
              "SPU-2": "I",
              "SPU-3": "X",
              "SPU-4": "I",
              "I": "I",
              "PL": "T"
            }
          }, {
            "Zonasi": "Jasa",
            "Kegiatan": "Penitipan Anak",
            skrk: {
              "SC": "T",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "I",
              "R-2": "I",
              "K": "I",
              "KT": "I",
              "SPU-1": "X",
              "SPU-2": "X",
              "SPU-3": "I",
              "SPU-4": "I",
              "I": "I",
              "PL": "T"
            }
          }, {
            "Zonasi": "Jasa",
            "Kegiatan": "Penitipan Hewan dan Petshop",
            skrk: {
              "SC": "T",
              "RTH-1": "I",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "B",
              "R-2": "B",
              "K": "I",
              "KT": "B",
              "SPU-1": "X",
              "SPU-2": "X",
              "SPU-3": "X",
              "SPU-4": "I",
              "I": "I",
              "PL": "T"
            }
          }, {
            "Zonasi": "Jasa",
            "Kegiatan": "Usaha Makanan & Minuman/Katering",
            skrk: {
              "SC": "B",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "I",
              "R-2": "I",
              "K": "I",
              "KT": "I",
              "SPU-1": "X",
              "SPU-2": "I",
              "SPU-3": "I",
              "SPU-4": "I",
              "I": "I",
              "PL": "I"
            }
          }, {
            "Zonasi": "Jasa",
            "Kegiatan": "Penukaran Valuta Asing",
            skrk: {
              "SC": "B",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "I",
              "R-2": "I",
              "K": "I",
              "KT": "I",
              "SPU-1": "X",
              "SPU-2": "I",
              "SPU-3": "I",
              "SPU-4": "I",
              "I": "I",
              "PL": "I"
            }
          }, {
            "Zonasi": "Jasa",
            "Kegiatan": "ATM Drive-thru",
            skrk: {
              "SC": "B",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "I",
              "R-2": "I",
              "K": "I",
              "KT": "I",
              "SPU-1": "I",
              "SPU-2": "I",
              "SPU-3": "I",
              "SPU-4": "I",
              "I": "I",
              "PL": "I"
            }
          }, {
            "Zonasi": "Jasa",
            "Kegiatan": "Bimbingan Belajar",
            skrk: {
              "SC": "T",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "I",
              "R-2": "I",
              "K": "I",
              "KT": "I",
              "SPU-1": "I",
              "SPU-2": "X",
              "SPU-3": "X",
              "SPU-4": "I",
              "I": "I",
              "PL": "T"
            }
          }, {
            "Zonasi": "Jasa",
            "Kegiatan": "Service Elektronik",
            skrk: {
              "SC": "T",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "I",
              "R-2": "I",
              "K": "I",
              "KT": "B",
              "SPU-1": "I",
              "SPU-2": "I",
              "SPU-3": "X",
              "SPU-4": "I",
              "I": "I",
              "PL": "T"
            }
          }, {
            "Zonasi": "Jasa",
            "Kegiatan": "Warung Telekomunikasi (Wartel)",
            skrk: {
              "SC": "I",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "I",
              "R-2": "I",
              "K": "I",
              "KT": "I",
              "SPU-1": "I",
              "SPU-2": "I",
              "SPU-3": "I",
              "SPU-4": "I",
              "I": "I",
              "PL": "I"
            }
          }, {
            "Zonasi": "Jasa",
            "Kegiatan": "Warung Internet (warnet), game centre",
            skrk: {
              "SC": "B",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "I",
              "R-2": "I",
              "K": "I",
              "KT": "B",
              "SPU-1": "X",
              "SPU-2": "I",
              "SPU-3": "X",
              "SPU-4": "I",
              "I": "I",
              "PL": "I"
            }
          }, {
            "Zonasi": "Jasa",
            "Kegiatan": "Bengkel Kendaraan Bermotor",
            skrk: {
              "SC": "T",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "B",
              "R-2": "B",
              "K": "I",
              "KT": "B",
              "SPU-1": "X",
              "SPU-2": "I",
              "SPU-3": "X",
              "SPU-4": "X",
              "I": "I",
              "PL": "T"
            }
          }, {
            "Zonasi": "Jasa",
            "Kegiatan": "Bengkel Kendaraan Tidak Bermotor",
            skrk: {
              "SC": "T",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "I",
              "R-2": "I",
              "K": "I",
              "KT": "I",
              "SPU-1": "I",
              "SPU-2": "I",
              "SPU-3": "X",
              "SPU-4": "X",
              "I": "I",
              "PL": "T"
            }
          }, {
            "Zonasi": "Jasa",
            "Kegiatan": "Bengkel Las/Konstruksi",
            skrk: {
              "SC": "T",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "B",
              "R-2": "B",
              "K": "I",
              "KT": "X",
              "SPU-1": "X",
              "SPU-2": "I",
              "SPU-3": "X",
              "SPU-4": "X",
              "I": "I",
              "PL": "T"
            }
          }, {
            "Zonasi": "Jasa",
            "Kegiatan": "Jasa Bangunan",
            skrk: {
              "SC": "T",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "B",
              "R-2": "B",
              "K": "I",
              "KT": "B",
              "SPU-1": "B",
              "SPU-2": "I",
              "SPU-3": "B",
              "SPU-4": "X",
              "I": "I",
              "PL": "I"
            }
          }, {
            "Zonasi": "Jasa",
            "Kegiatan": "Penyewaan Kendaraan Bermotor",
            skrk: {
              "SC": "B",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "I",
              "R-2": "I",
              "K": "I",
              "KT": "I",
              "SPU-1": "B",
              "SPU-2": "I",
              "SPU-3": "X",
              "SPU-4": "I",
              "I": "I",
              "PL": "I"
            }
          }, {
            "Zonasi": "Jasa",
            "Kegiatan": "Pencucian Kendaraan Bermotor",
            skrk: {
              "SC": "B",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "I",
              "R-2": "I",
              "K": "I",
              "KT": "I",
              "SPU-1": "X",
              "SPU-2": "",
              "SPU-3": "",
              "SPU-4": "",
              "I": "",
              "PL": ""
            }
          }, {
            "Zonasi": "Jasa",
            "Kegiatan": "Jasa Pembuatan Iklan dan out door printing",
            skrk: {
              "SC": "T",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "I",
              "R-2": "I",
              "K": "I",
              "KT": "I",
              "SPU-1": "B",
              "SPU-2": "X",
              "SPU-3": "X",
              "SPU-4": "X",
              "I": "I",
              "PL": "I"
            }
          }, {
            "Zonasi": "Jasa",
            "Kegiatan": "Penjahit (Taylor)",
            skrk: {
              "SC": "T",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "I",
              "R-2": "I",
              "K": "I",
              "KT": "I",
              "SPU-1": "I",
              "SPU-2": "I",
              "SPU-3": "I",
              "SPU-4": "I",
              "I": "I",
              "PL": "I"
            }
          }, {
            "Zonasi": "Jasa",
            "Kegiatan": "Percetakan Koran, Majalah dan Buku (offset printing)",
            skrk: {
              "SC": "T",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "B",
              "R-2": "B",
              "K": "I",
              "KT": "I",
              "SPU-1": "I",
              "SPU-2": "X",
              "SPU-3": "X",
              "SPU-4": "B",
              "I": "I",
              "PL": "T"
            }
          }, {
            "Zonasi": "Jasa",
            "Kegiatan": "Fotocopy",
            skrk: {
              "SC": "T",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "I",
              "R-2": "I",
              "K": "I",
              "KT": "I",
              "SPU-1": "I",
              "SPU-2": "I",
              "SPU-3": "I",
              "SPU-4": "I",
              "I": "I",
              "PL": "I"
            }
          }, {
            "Zonasi": "Jasa",
            "Kegiatan": "Pergudangan",
            skrk: {
              "SC": "X",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "X",
              "R-2": "X",
              "K": "I",
              "KT": "X",
              "SPU-1": "X",
              "SPU-2": "I",
              "SPU-3": "X",
              "SPU-4": "X",
              "I": "I",
              "PL": "X"
            }
          }, {
            "Zonasi": "Jasa",
            "Kegiatan": "Studio Radio",
            skrk: {
              "SC": "X",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "T",
              "R-2": "T",
              "K": "I",
              "KT": "T",
              "SPU-1": "T",
              "SPU-2": "I",
              "SPU-3": "X",
              "SPU-4": "X",
              "I": "I",
              "PL": "I"
            }
          }, {
            "Zonasi": "Jasa",
            "Kegiatan": "Studio TV",
            skrk: {
              "SC": "X",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "T",
              "R-2": "T",
              "K": "I",
              "KT": "T",
              "SPU-1": "X",
              "SPU-2": "X",
              "SPU-3": "X",
              "SPU-4": "X",
              "I": "X",
              "PL": "X"
            }
          }, {
            "Zonasi": "Jasa",
            "Kegiatan": "Tempat pembayaran listrik, telepon, air",
            skrk: {
              "SC": "B",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "I",
              "R-2": "I",
              "K": "I",
              "KT": "I",
              "SPU-1": "I",
              "SPU-2": "I",
              "SPU-3": "X",
              "SPU-4": "I",
              "I": "I",
              "PL": "I"
            }
          }, {
            "Zonasi": "Jasa",
            "Kegiatan": "SPBU/SPBE",
            skrk: {
              "SC": "X",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "X",
              "R-2": "X",
              "K": "I",
              "KT": "X",
              "SPU-1": "X",
              "SPU-2": "I",
              "SPU-3": "X",
              "SPU-4": "X",
              "I": "X",
              "PL": "X"
            }
          }, {
            "Zonasi": "Jasa",
            "Kegiatan": "Pusat Transmisi dan Pemancar Jaringan Telekomunikasi",
            skrk: {
              "SC": "X",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "T",
              "R-2": "T",
              "K": "I",
              "KT": "T",
              "SPU-1": "X",
              "SPU-2": "I",
              "SPU-3": "X",
              "SPU-4": "X",
              "I": "X",
              "PL": "X"
            }
          }, {
            "Zonasi": "Jasa",
            "Kegiatan": "Reklame",
            skrk: {
              "SC": "X",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "T",
              "R-2": "T",
              "K": "I",
              "KT": "T",
              "SPU-1": "T",
              "SPU-2": "I",
              "SPU-3": "T",
              "SPU-4": "T",
              "I": "I",
              "PL": "I"
            }
          }, {
            "Zonasi": "Wisata & Rekreasi",
            "Kegiatan": "Permainan Ketangkasan (Amusement), dan Billyard",
            skrk: {
              "SC": "X",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "X",
              "R-2": "X",
              "K": "I",
              "KT": "X",
              "SPU-1": "X",
              "SPU-2": "X",
              "SPU-3": "X",
              "SPU-4": "I",
              "I": "X",
              "PL": "T"
            }
          }, {
            "Zonasi": "Wisata & Rekreasi",
            "Kegiatan": "Penyelenggaraan Acara/Event Organiser",
            skrk: {
              "SC": "B",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "B",
              "R-2": "B",
              "K": "I",
              "KT": "B",
              "SPU-1": "B",
              "SPU-2": "B",
              "SPU-3": "B",
              "SPU-4": "B",
              "I": "I",
              "PL": "I"
            }
          }, {
            "Zonasi": "Wisata & Rekreasi",
            "Kegiatan": "Salon Kecantikan",
            skrk: {
              "SC": "B",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "B",
              "R-2": "B",
              "K": "I",
              "KT": "B",
              "SPU-1": "B",
              "SPU-2": "B",
              "SPU-3": "B",
              "SPU-4": "B",
              "I": "I",
              "PL": "T"
            }
          }, {
            "Zonasi": "Wisata & Rekreasi",
            "Kegiatan": "Bioskop",
            skrk: {
              "SC": "X",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "X",
              "R-2": "X",
              "K": "I",
              "KT": "X",
              "SPU-1": "X",
              "SPU-2": "X",
              "SPU-3": "X",
              "SPU-4": "I",
              "I": "I",
              "PL": "T"
            }
          }, {
            "Zonasi": "Wisata & Rekreasi",
            "Kegiatan": "Tempat Pijat, SPA, Mandi Uap & Fitnes",
            skrk: {
              "SC": "X",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "B",
              "R-2": "B",
              "K": "I",
              "KT": "B",
              "SPU-1": "X",
              "SPU-2": "I",
              "SPU-3": "I",
              "SPU-4": "I",
              "I": "I",
              "PL": "I"
            }
          }, {
            "Zonasi": "Wisata & Rekreasi",
            "Kegiatan": "Caf� dan Cofee shop",
            skrk: {
              "SC": "B",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "B",
              "R-2": "B",
              "K": "I",
              "KT": "I",
              "SPU-1": "I",
              "SPU-2": "I",
              "SPU-3": "I",
              "SPU-4": "I",
              "I": "I",
              "PL": "I"
            }
          }, {
            "Zonasi": "Wisata & Rekreasi",
            "Kegiatan": "Diskotik, Klub Malam dan Bar",
            skrk: {
              "SC": "X",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "X",
              "R-2": "X",
              "K": "I",
              "KT": "X",
              "SPU-1": "X",
              "SPU-2": "X",
              "SPU-3": "X",
              "SPU-4": "I",
              "I": "I",
              "PL": "T"
            }
          }, {
            "Zonasi": "Wisata & Rekreasi",
            "Kegiatan": "Karaoke",
            skrk: {
              "SC": "X",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "X",
              "R-2": "X",
              "K": "I",
              "KT": "X",
              "SPU-1": "X",
              "SPU-2": "X",
              "SPU-3": "X",
              "SPU-4": "I",
              "I": "I",
              "PL": "T"
            }
          }, {
            "Zonasi": "Wisata & Rekreasi",
            "Kegiatan": "Lapangan Footsall",
            skrk: {
              "SC": "I",
              "RTH-1": "X",
              "RTH-2": "I",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "I",
              "R-2": "I",
              "K": "I",
              "KT": "I",
              "SPU-1": "I",
              "SPU-2": "I",
              "SPU-3": "I",
              "SPU-4": "I",
              "I": "I",
              "PL": "I"
            }
          }, {
            "Zonasi": "Wisata & Rekreasi",
            "Kegiatan": "Teater Terbuka",
            skrk: {
              "SC": "I",
              "RTH-1": "B",
              "RTH-2": "I",
              "RTH-3": "X",
              "PS": "T",
              "R-1": "I",
              "R-2": "I",
              "K": "I",
              "KT": "I",
              "SPU-1": "I",
              "SPU-2": "I",
              "SPU-3": "I",
              "SPU-4": "I",
              "I": "I",
              "PL": "I"
            }
          }, {
            "Zonasi": "Wisata & Rekreasi",
            "Kegiatan": "Taman Hiburan/Rekreasi",
            skrk: {
              "SC": "I",
              "RTH-1": "B",
              "RTH-2": "I",
              "RTH-3": "X",
              "PS": "T",
              "R-1": "I",
              "R-2": "I",
              "K": "I",
              "KT": "I",
              "SPU-1": "I",
              "SPU-2": "I",
              "SPU-3": "I",
              "SPU-4": "I",
              "I": "I",
              "PL": "I"
            }
          }, {
            "Zonasi": "Wisata & Rekreasi",
            "Kegiatan": "Taman Bermain Lingkungan",
            skrk: {
              "SC": "I",
              "RTH-1": "B",
              "RTH-2": "I",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "I",
              "R-2": "I",
              "K": "I",
              "KT": "I",
              "SPU-1": "I",
              "SPU-2": "I",
              "SPU-3": "I",
              "SPU-4": "I",
              "I": "I",
              "PL": "I"
            }
          }, {
            "Zonasi": "Wisata & Rekreasi",
            "Kegiatan": "Kebun Binatang",
            skrk: {
              "SC": "X",
              "RTH-1": "I",
              "RTH-2": "I",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "X",
              "R-2": "X",
              "K": "X",
              "KT": "X",
              "SPU-1": "X",
              "SPU-2": "X",
              "SPU-3": "X",
              "SPU-4": "X",
              "I": "X",
              "PL": "X"
            }
          }, {
            "Zonasi": "Wisata & Rekreasi",
            "Kegiatan": "Gelanggang/Kolam Renang",
            skrk: {
              "SC": "X",
              "RTH-1": "B",
              "RTH-2": "I",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "I",
              "R-2": "I",
              "K": "I",
              "KT": "B",
              "SPU-1": "I",
              "SPU-2": "X",
              "SPU-3": "X",
              "SPU-4": "I",
              "I": "I",
              "PL": "I"
            }
          }, {
            "Zonasi": "Wisata & Rekreasi",
            "Kegiatan": "Gedung Kesenian",
            skrk: {
              "SC": "I",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "I",
              "R-2": "I",
              "K": "I",
              "KT": "I",
              "SPU-1": "I",
              "SPU-2": "X",
              "SPU-3": "X",
              "SPU-4": "I",
              "I": "I",
              "PL": "I"
            }
          }, {
            "Zonasi": "Wisata & Rekreasi",
            "Kegiatan": "Gedung/Lapangan Olah Raga",
            skrk: {
              "SC": "I",
              "RTH-1": "I",
              "RTH-2": "I",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "I",
              "R-2": "I",
              "K": "I",
              "KT": "B",
              "SPU-1": "I",
              "SPU-2": "I",
              "SPU-3": "I",
              "SPU-4": "I",
              "I": "I",
              "PL": "I"
            }
          }, {
            "Zonasi": "Wisata & Rekreasi",
            "Kegiatan": "Gelanggang Remaja",
            skrk: {
              "SC": "I",
              "RTH-1": "I",
              "RTH-2": "I",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "I",
              "R-2": "I",
              "K": "I",
              "KT": "I",
              "SPU-1": "I",
              "SPU-2": "X",
              "SPU-3": "X",
              "SPU-4": "I",
              "I": "I",
              "PL": "I"
            }
          }, {
            "Zonasi": "Wisata & Rekreasi",
            "Kegiatan": "Stadion",
            skrk: {
              "SC": "X",
              "RTH-1": "X",
              "RTH-2": "I",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "T",
              "R-2": "T",
              "K": "I",
              "KT": "X",
              "SPU-1": "T",
              "SPU-2": "X",
              "SPU-3": "X",
              "SPU-4": "I",
              "I": "I",
              "PL": "I"
            }
          }, {
            "Zonasi": "Wisata & Rekreasi",
            "Kegiatan": "Restoran, Pusat Jajanan",
            skrk: {
              "SC": "T",
              "RTH-1": "B",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "B",
              "R-2": "B",
              "K": "I",
              "KT": "B",
              "SPU-1": "B",
              "SPU-2": "B",
              "SPU-3": "B",
              "SPU-4": "I",
              "I": "I",
              "PL": "I"
            }
          }, {
            "Zonasi": "Wisata & Rekreasi",
            "Kegiatan": "Kolam Pancing",
            skrk: {
              "SC": "X",
              "RTH-1": "I",
              "RTH-2": "I",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "I",
              "R-2": "I",
              "K": "I",
              "KT": "B",
              "SPU-1": "B",
              "SPU-2": "B",
              "SPU-3": "B",
              "SPU-4": "I",
              "I": "I",
              "PL": "I"
            }
          }, {
            "Zonasi": "Wisata & Rekreasi",
            "Kegiatan": "Obyek Wisata Sejarah, Pendidikan dan Alam",
            skrk: {
              "SC": "I",
              "RTH-1": "I",
              "RTH-2": "I",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "I",
              "R-2": "I",
              "K": "I",
              "KT": "I",
              "SPU-1": "I",
              "SPU-2": "I",
              "SPU-3": "I",
              "SPU-4": "I",
              "I": "I",
              "PL": "I"
            }
          }, {
            "Zonasi": "Industri",
            "Kegiatan": "Industri Kecil/Rumah Tangga",
            skrk: {
              "SC": "B",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "I",
              "R-2": "I",
              "K": "I",
              "KT": "X",
              "SPU-1": "X",
              "SPU-2": "X",
              "SPU-3": "X",
              "SPU-4": "X",
              "I": "I",
              "PL": "I"
            }
          }, {
            "Zonasi": "Pelayanan Perkantoran",
            "Kegiatan": "Kantor Pemerintah Pusat/Instansi Vertikal/Nasional",
            skrk: {
              "SC": "B",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "B",
              "R-2": "B",
              "K": "I",
              "KT": "I",
              "SPU-1": "B",
              "SPU-2": "X",
              "SPU-3": "B",
              "SPU-4": "B",
              "I": "I",
              "PL": "B"
            }
          }, {
            "Zonasi": "Pelayanan Perkantoran",
            "Kegiatan": "Kantor Pemerintah Daerah/Kota/Propinsi/Wilayah",
            skrk: {
              "SC": "B",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "I",
              "R-2": "I",
              "K": "I",
              "KT": "I",
              "SPU-1": "I",
              "SPU-2": "X",
              "SPU-3": "I",
              "SPU-4": "I",
              "I": "I",
              "PL": "B"
            }
          }, {
            "Zonasi": "Pelayanan Perkantoran",
            "Kegiatan": "Kantor Perwakilan Negara Asing",
            skrk: {
              "SC": "B",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "B",
              "R-2": "B",
              "K": "I",
              "KT": "I",
              "SPU-1": "B",
              "SPU-2": "X",
              "SPU-3": "B",
              "SPU-4": "B",
              "I": "I",
              "PL": "B"
            }
          }, {
            "Zonasi": "Pelayanan Perkantoran",
            "Kegiatan": "Kantor BUMN/BUMD",
            skrk: {
              "SC": "B",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "B",
              "R-2": "B",
              "K": "I",
              "KT": "I",
              "SPU-1": "B",
              "SPU-2": "I",
              "SPU-3": "B",
              "SPU-4": "B",
              "I": "I",
              "PL": "B"
            }
          }, {
            "Zonasi": "Pelayanan Perkantoran",
            "Kegiatan": "Kantor POLRI",
            skrk: {
              "SC": "B",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "I",
              "R-2": "I",
              "K": "I",
              "KT": "I",
              "SPU-1": "I",
              "SPU-2": "I",
              "SPU-3": "I",
              "SPU-4": "I",
              "I": "I",
              "PL": "B"
            }
          }, {
            "Zonasi": "Pelayanan Perkantoran",
            "Kegiatan": "Kantor TNI dan Hakam",
            skrk: {
              "SC": "B",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "B",
              "R-2": "B",
              "K": "I",
              "KT": "I",
              "SPU-1": "B",
              "SPU-2": "I",
              "SPU-3": "B",
              "SPU-4": "B",
              "I": "I",
              "PL": "B"
            }
          }, {
            "Zonasi": "Pelayanan Perkantoran",
            "Kegiatan": "Kantor Lembaga Sosial dan Organisasi Kemasyarakatn",
            skrk: {
              "SC": "B",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "I",
              "R-2": "I",
              "K": "I",
              "KT": "I",
              "SPU-1": "I",
              "SPU-2": "I",
              "SPU-3": "I",
              "SPU-4": "I",
              "I": "I",
              "PL": "B"
            }
          }, {
            "Zonasi": "Pelayanan Perkantoran",
            "Kegiatan": "Kantor Swasta",
            skrk: {
              "SC": "B",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "B",
              "R-2": "B",
              "K": "I",
              "KT": "I",
              "SPU-1": "B",
              "SPU-2": "I",
              "SPU-3": "B",
              "SPU-4": "B",
              "I": "I",
              "PL": "B"
            }
          }, {
            "Zonasi": "Pelayanan Perkantoran",
            "Kegiatan": "Lembaga Permasyarakatan (LP)",
            skrk: {
              "SC": "B",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "T",
              "R-2": "T",
              "K": "I",
              "KT": "I",
              "SPU-1": "X",
              "SPU-2": "X",
              "SPU-3": "X",
              "SPU-4": "X",
              "I": "X",
              "PL": "X"
            }
          }, {
            "Zonasi": "Pelayanan Pendidikan",
            "Kegiatan": "Play Group, TK, PAUD, dan Pendidikan Khusus",
            skrk: {
              "SC": "B",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "I",
              "R-2": "I",
              "K": "I",
              "KT": "I",
              "SPU-1": "I",
              "SPU-2": "X",
              "SPU-3": "I",
              "SPU-4": "I",
              "I": "I",
              "PL": "I"
            }
          }, {
            "Zonasi": "Pelayanan Pendidikan",
            "Kegiatan": "Pendidikan Dasar",
            skrk: {
              "SC": "B",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "I",
              "R-2": "I",
              "K": "I",
              "KT": "I",
              "SPU-1": "I",
              "SPU-2": "X",
              "SPU-3": "I",
              "SPU-4": "I",
              "I": "I",
              "PL": "I"
            }
          }, {
            "Zonasi": "Pelayanan Pendidikan",
            "Kegiatan": "Pendidikan Menengah",
            skrk: {
              "SC": "B",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "B",
              "R-2": "B",
              "K": "I",
              "KT": "I",
              "SPU-1": "I",
              "SPU-2": "X",
              "SPU-3": "X",
              "SPU-4": "X",
              "I": "I",
              "PL": "I"
            }
          }, {
            "Zonasi": "Pelayanan Pendidikan",
            "Kegiatan": "Pendidikan Tinggi",
            skrk: {
              "SC": "B",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "B",
              "R-2": "B",
              "K": "I",
              "KT": "I",
              "SPU-1": "I",
              "SPU-2": "X",
              "SPU-3": "X",
              "SPU-4": "X",
              "I": "X",
              "PL": "X"
            }
          }, {
            "Zonasi": "Pelayanan Pendidikan",
            "Kegiatan": "Sekolah Agama/Pesantren",
            skrk: {
              "SC": "B",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "I",
              "R-2": "I",
              "K": "I",
              "KT": "I",
              "SPU-1": "I",
              "SPU-2": "X",
              "SPU-3": "X",
              "SPU-4": "X",
              "I": "X",
              "PL": "X"
            }
          }, {
            "Zonasi": "Pelayanan Pendidikan",
            "Kegiatan": "Tempat Kursus, Lembaga Pendidikan, Lembaga Penelitian",
            skrk: {
              "SC": "B",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "B",
              "R-2": "B",
              "K": "I",
              "KT": "I",
              "SPU-1": "I",
              "SPU-2": "X",
              "SPU-3": "X",
              "SPU-4": "X",
              "I": "X",
              "PL": "X"
            }
          }, {
            "Zonasi": "Pelayanan Pendidikan",
            "Kegiatan": "Islamic Centre",
            skrk: {
              "SC": "B",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "I",
              "R-2": "I",
              "K": "I",
              "KT": "I",
              "SPU-1": "I",
              "SPU-2": "X",
              "SPU-3": "X",
              "SPU-4": "X",
              "I": "X",
              "PL": "X"
            }
          }, {
            "Zonasi": "Pelayanan Transportasi",
            "Kegiatan": "Terminal Penumpang",
            skrk: {
              "SC": "X",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "X",
              "R-2": "X",
              "K": "I",
              "KT": "X",
              "SPU-1": "X",
              "SPU-2": "I",
              "SPU-3": "X",
              "SPU-4": "X",
              "I": "X",
              "PL": "X"
            }
          }, {
            "Zonasi": "Pelayanan Transportasi",
            "Kegiatan": "Terminal Barang",
            skrk: {
              "SC": "X",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "X",
              "R-2": "X",
              "K": "I",
              "KT": "X",
              "SPU-1": "X",
              "SPU-2": "I",
              "SPU-3": "X",
              "SPU-4": "X",
              "I": "X",
              "PL": "X"
            }
          }, {
            "Zonasi": "Pelayanan Transportasi",
            "Kegiatan": "Halte",
            skrk: {
              "SC": "I",
              "RTH-1": "I",
              "RTH-2": "I",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "I",
              "R-2": "I",
              "K": "I",
              "KT": "I",
              "SPU-1": "I",
              "SPU-2": "I",
              "SPU-3": "I",
              "SPU-4": "I",
              "I": "I",
              "PL": "I"
            }
          }, {
            "Zonasi": "Pelayanan Transportasi",
            "Kegiatan": "Stasiun",
            skrk: {
              "SC": "X",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "X",
              "R-2": "X",
              "K": "I",
              "KT": "X",
              "SPU-1": "X",
              "SPU-2": "I",
              "SPU-3": "X",
              "SPU-4": "X",
              "I": "X",
              "PL": "T"
            }
          }, {
            "Zonasi": "Pelayanan Transportasi",
            "Kegiatan": "Tempat Parkir Umum",
            skrk: {
              "SC": "B",
              "RTH-1": "B",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "X",
              "R-2": "X",
              "K": "I",
              "KT": "I",
              "SPU-1": "T",
              "SPU-2": "I",
              "SPU-3": "B",
              "SPU-4": "I",
              "I": "I",
              "PL": "I"
            }
          }, {
            "Zonasi": "Pelayanan Transportasi",
            "Kegiatan": "Tempat Parkir Kendaraan",
            skrk: {
              "SC": "B",
              "RTH-1": "B",
              "RTH-2": "B",
              "RTH-3": "B",
              "PS": "X",
              "R-1": "I",
              "R-2": "I",
              "K": "I",
              "KT": "I",
              "SPU-1": "T",
              "SPU-2": "I",
              "SPU-3": "I",
              "SPU-4": "I",
              "I": "I",
              "PL": "T"
            }
          }, {
            "Zonasi": "Pelayanan Transportasi",
            "Kegiatan": "Pool/Garasi Bus",
            skrk: {
              "SC": "X",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "X",
              "R-2": "X",
              "K": "I",
              "KT": "X",
              "SPU-1": "X",
              "SPU-2": "I",
              "SPU-3": "X",
              "SPU-4": "X",
              "I": "I",
              "PL": "X"
            }
          }, {
            "Zonasi": "Pelayanan Transportasi",
            "Kegiatan": "Pool/Garasi Taxi",
            skrk: {
              "SC": "X",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "X",
              "R-2": "X",
              "K": "I",
              "KT": "X",
              "SPU-1": "X",
              "SPU-2": "I",
              "SPU-3": "X",
              "SPU-4": "X",
              "I": "I",
              "PL": "X"
            }
          }, {
            "Zonasi": "Pelayanan Kesehatan",
            "Kegiatan": "Rumah Sakit",
            skrk: {
              "SC": "X",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "X",
              "R-2": "X",
              "K": "I",
              "KT": "T",
              "SPU-1": "X",
              "SPU-2": "X",
              "SPU-3": "I",
              "SPU-4": "X",
              "I": "T",
              "PL": "T"
            }
          }, {
            "Zonasi": "Pelayanan Kesehatan",
            "Kegiatan": "Rumah Sakit Bersalin",
            skrk: {
              "SC": "X",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "T",
              "R-2": "T",
              "K": "I",
              "KT": "T",
              "SPU-1": "X",
              "SPU-2": "X",
              "SPU-3": "I",
              "SPU-4": "X",
              "I": "T",
              "PL": "T"
            }
          }, {
            "Zonasi": "Pelayanan Kesehatan",
            "Kegiatan": "Rumah Bersalin/Balai Klinik Ibu dan Anak (BKIA)",
            skrk: {
              "SC": "B",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "I",
              "R-2": "I",
              "K": "I",
              "KT": "I",
              "SPU-1": "X",
              "SPU-2": "X",
              "SPU-3": "I",
              "SPU-4": "B",
              "I": "I",
              "PL": "T"
            }
          }, {
            "Zonasi": "Pelayanan Kesehatan",
            "Kegiatan": "Laboratorium Kesehatan",
            skrk: {
              "SC": "B",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "X",
              "R-2": "X",
              "K": "I",
              "KT": "I",
              "SPU-1": "T",
              "SPU-2": "X",
              "SPU-3": "I",
              "SPU-4": "B",
              "I": "I",
              "PL": "T"
            }
          }, {
            "Zonasi": "Pelayanan Kesehatan",
            "Kegiatan": "Puskesmas, Pustu",
            skrk: {
              "SC": "B",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "I",
              "R-2": "I",
              "K": "I",
              "KT": "I",
              "SPU-1": "T",
              "SPU-2": "X",
              "SPU-3": "I",
              "SPU-4": "B",
              "I": "I",
              "PL": "T"
            }
          }, {
            "Zonasi": "Pelayanan Kesehatan",
            "Kegiatan": "Praktek Pengobatan Alternatif, Tradisional, Herbal",
            skrk: {
              "SC": "B",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "I",
              "R-2": "I",
              "K": "I",
              "KT": "I",
              "SPU-1": "X",
              "SPU-2": "X",
              "SPU-3": "I",
              "SPU-4": "B",
              "I": "I",
              "PL": "T"
            }
          }, {
            "Zonasi": "Pelayanan Kesehatan",
            "Kegiatan": "Posyandu",
            skrk: {
              "SC": "B",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "I",
              "R-2": "I",
              "K": "I",
              "KT": "I",
              "SPU-1": "T",
              "SPU-2": "X",
              "SPU-3": "I",
              "SPU-4": "B",
              "I": "I",
              "PL": "T"
            }
          }, {
            "Zonasi": "Pelayanan Kesehatan",
            "Kegiatan": "Klinik Hewan",
            skrk: {
              "SC": "B",
              "RTH-1": "I",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "T",
              "R-2": "T",
              "K": "I",
              "KT": "I",
              "SPU-1": "X",
              "SPU-2": "X",
              "SPU-3": "I",
              "SPU-4": "B",
              "I": "I",
              "PL": "T"
            }
          }, {
            "Zonasi": "Pelayanan Kesehatan",
            "Kegiatan": "Balai Kesehatan/Pengobatan",
            skrk: {
              "SC": "B",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "I",
              "R-2": "I",
              "K": "I",
              "KT": "I",
              "SPU-1": "T",
              "SPU-2": "I",
              "SPU-3": "I",
              "SPU-4": "B",
              "I": "I",
              "PL": "T"
            }
          }, {
            "Zonasi": "Pelayanan Kesehatan",
            "Kegiatan": "Praktek Dokter Umum, Terpadu, Mandiri atau Spesialis",
            skrk: {
              "SC": "B",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "I",
              "R-2": "I",
              "K": "I",
              "KT": "I",
              "SPU-1": "X",
              "SPU-2": "X",
              "SPU-3": "I",
              "SPU-4": "B",
              "I": "I",
              "PL": "T"
            }
          }, {
            "Zonasi": "Pelayanan Kesehatan",
            "Kegiatan": "Praktek Bidan",
            skrk: {
              "SC": "B",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "I",
              "R-2": "I",
              "K": "I",
              "KT": "I",
              "SPU-1": "X",
              "SPU-2": "X",
              "SPU-3": "I",
              "SPU-4": "B",
              "I": "I",
              "PL": "T"
            }
          }, {
            "Zonasi": "Pelayanan Kesehatan",
            "Kegiatan": "Apotek,Toko Obat/Herbal",
            skrk: {
              "SC": "B",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "B",
              "R-2": "B",
              "K": "I",
              "KT": "B",
              "SPU-1": "X",
              "SPU-2": "X",
              "SPU-3": "I",
              "SPU-4": "B",
              "I": "I",
              "PL": "B"
            }
          }, {
            "Zonasi": "Pelayanan Kesehatan",
            "Kegiatan": "Produksi Jamu dan Obat Herbal",
            skrk: {
              "SC": "B",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "B",
              "R-2": "B",
              "K": "I",
              "KT": "B",
              "SPU-1": "X",
              "SPU-2": "X",
              "SPU-3": "I",
              "SPU-4": "B",
              "I": "I",
              "PL": "B"
            }
          }, {
            "Zonasi": "Keagamaan, Sosial & Budaya",
            "Kegiatan": "Masjid",
            skrk: {
              "SC": "I",
              "RTH-1": "I",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "I",
              "R-2": "I",
              "K": "I",
              "KT": "I",
              "SPU-1": "I",
              "SPU-2": "I",
              "SPU-3": "I",
              "SPU-4": "I",
              "I": "I",
              "PL": "I"
            }
          }, {
            "Zonasi": "Keagamaan, Sosial & Budaya",
            "Kegiatan": "Musholla/Langgar",
            skrk: {
              "SC": "I",
              "RTH-1": "I",
              "RTH-2": "I",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "I",
              "R-2": "I",
              "K": "I",
              "KT": "I",
              "SPU-1": "I",
              "SPU-2": "I",
              "SPU-3": "I",
              "SPU-4": "I",
              "I": "I",
              "PL": "I"
            }
          }, {
            "Zonasi": "Keagamaan, Sosial & Budaya",
            "Kegiatan": "Gereja",
            skrk: {
              "SC": "B",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "B",
              "R-2": "B",
              "K": "I",
              "KT": "I",
              "SPU-1": "I",
              "SPU-2": "I",
              "SPU-3": "I",
              "SPU-4": "I",
              "I": "I",
              "PL": "B"
            }
          }, {
            "Zonasi": "Keagamaan, Sosial & Budaya",
            "Kegiatan": "Vihara",
            skrk: {
              "SC": "B",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "B",
              "R-2": "B",
              "K": "I",
              "KT": "I",
              "SPU-1": "I",
              "SPU-2": "I",
              "SPU-3": "I",
              "SPU-4": "I",
              "I": "I",
              "PL": "B"
            }
          }, {
            "Zonasi": "Keagamaan, Sosial & Budaya",
            "Kegiatan": "Pura",
            skrk: {
              "SC": "B",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "B",
              "R-2": "B",
              "K": "I",
              "KT": "I",
              "SPU-1": "I",
              "SPU-2": "I",
              "SPU-3": "I",
              "SPU-4": "I",
              "I": "I",
              "PL": "B"
            }
          }, {
            "Zonasi": "Keagamaan, Sosial & Budaya",
            "Kegiatan": "Klenteng",
            skrk: {
              "SC": "B",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "B",
              "R-2": "B",
              "K": "I",
              "KT": "I",
              "SPU-1": "I",
              "SPU-2": "I",
              "SPU-3": "I",
              "SPU-4": "I",
              "I": "I",
              "PL": "B"
            }
          }, {
            "Zonasi": "Keagamaan, Sosial & Budaya",
            "Kegiatan": "Balai RW",
            skrk: {
              "SC": "B",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "I",
              "R-2": "I",
              "K": "I",
              "KT": "I",
              "SPU-1": "X",
              "SPU-2": "X",
              "SPU-3": "X",
              "SPU-4": "X",
              "I": "I",
              "PL": "I"
            }
          }, {
            "Zonasi": "Keagamaan, Sosial & Budaya",
            "Kegiatan": "Gedung Serbaguna",
            skrk: {
              "SC": "B",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "I",
              "R-2": "I",
              "K": "I",
              "KT": "I",
              "SPU-1": "B",
              "SPU-2": "I",
              "SPU-3": "B",
              "SPU-4": "I",
              "I": "I",
              "PL": "I"
            }
          }, {
            "Zonasi": "Keagamaan, Sosial & Budaya",
            "Kegiatan": "Gedung Pertemuan",
            skrk: {
              "SC": "B",
              "RTH-1": "X",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "I",
              "R-2": "I",
              "K": "I",
              "KT": "I",
              "SPU-1": "B",
              "SPU-2": "I",
              "SPU-3": "B",
              "SPU-4": "I",
              "I": "I",
              "PL": "I"
            }
          }, {
            "Zonasi": "Keagamaan, Sosial & Budaya",
            "Kegiatan": "Sanggar Seni",
            skrk: {
              "SC": "I",
              "RTH-1": "I",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "I",
              "R-2": "I",
              "K": "I",
              "KT": "I",
              "SPU-1": "I",
              "SPU-2": "X",
              "SPU-3": "X",
              "SPU-4": "I",
              "I": "X",
              "PL": "I"
            }
          }, {
            "Zonasi": "Keagamaan, Sosial & Budaya",
            "Kegiatan": "Museum",
            skrk: {
              "SC": "I",
              "RTH-1": "I",
              "RTH-2": "X",
              "RTH-3": "X",
              "PS": "X",
              "R-1": "I",
              "R-2": "I",
              "K": "I",
              "KT": "I",
              "SPU-1": "I",
              "SPU-2": "X",
              "SPU-3": "X",
              "SPU-4": "I",
              "I": "X",
              "PL": "I"
            }
          })
          .then(() => console.log('finished populating skrk'))
          .catch(err => console.log('error populating skrk', err));
      }); // Seed SKRK



    Intensitasruang.find({}).remove()
      .then(() => {
        Intensitasruang.create({
            "Kelas": "1",
            "Keterangan": "Luas Tanah/Persil 40-100m2",
            "Batas": {
              "min": 40,
              "max": 100
            },
            KDB: {
              "SC": 80,
              "RTH-1": 0,
              "RTH-2": 25,
              "RTH-3": 20,
              "PS": 25,
              "R-1": 80,
              "R-2": 80,
              "K": 90,
              "KT": 90,
              "SPU-1": 80,
              "SPU-2": 80,
              "SPU-3": 80,
              "SPU-4": 80,
              "I": 80,
              "PL": 80
            },
            Tinggi: {
              "SC": 12,
              "RTH-1": 0,
              "RTH-2": 8,
              "RTH-3": 8,
              "PS": 8,
              "R-1": 16,
              "R-2": 12,
              "K": 20,
              "KT": 16,
              "SPU-1": 16,
              "SPU-2": 16,
              "SPU-3": 16,
              "SPU-4": 12,
              "I": 12,
              "PL": 12
            },
            KLB: {
              "SC": 1.2,
              "RTH-1": 0,
              "RTH-2": 0.5,
              "RTH-3": 0.4,
              "PS": 0.5,
              "R-1": 3.2,
              "R-2": 2.4,
              "K": 4.5,
              "KT": 3.6,
              "SPU-1": 3.2,
              "SPU-2": 3.2,
              "SPU-3": 3.2,
              "SPU-4": 3.2,
              "I": 2.4,
              "PL": 2.4
            },
            KDH: {
              "SC": 10,
              "RTH-1": 0,
              "RTH-2": 50,
              "RTH-3": 60,
              "PS": 50,
              "R-1": 10,
              "R-2": 10,
              "K": 5,
              "KT": 5,
              "SPU-1": 10,
              "SPU-2": 10,
              "SPU-3": 10,
              "SPU-4": 10,
              "I": 10,
              "PL": 10
            }
          }, {
            "Kelas": "2",
            "Keterangan": "Luas Tanah/Persil 101-200m2",
            "Batas": {
              "min": 101,
              "max": 200
            },
            KDB: {
              "SC": 80,
              "RTH-1": 0,
              "RTH-2": 25,
              "RTH-3": 20,
              "PS": 25,
              "R-1": 80,
              "R-2": 80,
              "K": 90,
              "KT": 90,
              "SPU-1": 80,
              "SPU-2": 80,
              "SPU-3": 80,
              "SPU-4": 80,
              "I": 80,
              "PL": 80
            },
            Tinggi: {
              "SC": 12,
              "RTH-1": 0,
              "RTH-2": 8,
              "RTH-3": 8,
              "PS": 8,
              "R-1": 16,
              "R-2": 12,
              "K": 24,
              "KT": 16,
              "SPU-1": 16,
              "SPU-2": 16,
              "SPU-3": 16,
              "SPU-4": 16,
              "I": 12,
              "PL": 12
            },
            KLB: {
              "SC": 1.2,
              "RTH-1": 0,
              "RTH-2": 0.5,
              "RTH-3": 0.4,
              "PS": 0.5,
              "R-1": 3.2,
              "R-2": 2.4,
              "K": 4.5,
              "KT": 3.6,
              "SPU-1": 3.2,
              "SPU-2": 3.2,
              "SPU-3": 3.2,
              "SPU-4": 3.2,
              "I": 2.4,
              "PL": 2.4
            },
            KDH: {
              "SC": 10,
              "RTH-1": 0,
              "RTH-2": 50,
              "RTH-3": 60,
              "PS": 50,
              "R-1": 10,
              "R-2": 10,
              "K": 5,
              "KT": 5,
              "SPU-1": 10,
              "SPU-2": 10,
              "SPU-3": 10,
              "SPU-4": 10,
              "I": 10,
              "PL": 10
            }
          }, {
            "Kelas": "3",
            "Keterangan": "Luas Tanah/Persil 201-400m2",
            "Batas": {
              "min": 201,
              "max": 400
            },
            KDB: {
              "SC": 80,
              "RTH-1": 0,
              "RTH-2": 20,
              "RTH-3": 20,
              "PS": 20,
              "R-1": 80,
              "R-2": 80,
              "K": 80,
              "KT": 90,
              "SPU-1": 80,
              "SPU-2": 80,
              "SPU-3": 80,
              "SPU-4": 80,
              "I": 80,
              "PL": 80
            },
            Tinggi: {
              "SC": 12,
              "RTH-1": 0,
              "RTH-2": 8,
              "RTH-3": 8,
              "PS": 8,
              "R-1": 16,
              "R-2": 12,
              "K": 26,
              "KT": 20,
              "SPU-1": 16,
              "SPU-2": 16,
              "SPU-3": 16,
              "SPU-4": 16,
              "I": 12,
              "PL": 12
            },
            KLB: {
              "SC": 1.2,
              "RTH-1": 0,
              "RTH-2": 0.4,
              "RTH-3": 0.4,
              "PS": 0.4,
              "R-1": 3.2,
              "R-2": 2.4,
              "K": 4.8,
              "KT": 4,
              "SPU-1": 3.2,
              "SPU-2": 3.2,
              "SPU-3": 3.2,
              "SPU-4": 3.2,
              "I": 2.4,
              "PL": 2.4
            },
            KDH: {
              "SC": 10,
              "RTH-1": 0,
              "RTH-2": 60,
              "RTH-3": 60,
              "PS": 60,
              "R-1": 10,
              "R-2": 10,
              "K": 10,
              "KT": 10,
              "SPU-1": 10,
              "SPU-2": 10,
              "SPU-3": 10,
              "SPU-4": 10,
              "I": 10,
              "PL": 10
            }
          }, {
            "Kelas": "4",
            "Keterangan": "Luas Tanah/Persil 401-1000m2",
            "Batas": {
              "min": 401,
              "max": 1000
            },
            KDB: {
              "SC": 80,
              "RTH-1": 0,
              "RTH-2": 20,
              "RTH-3": 20,
              "PS": 20,
              "R-1": 80,
              "R-2": 80,
              "K": 80,
              "KT": 90,
              "SPU-1": 70,
              "SPU-2": 70,
              "SPU-3": 70,
              "SPU-4": 70,
              "I": 80,
              "PL": 80
            },
            Tinggi: {
              "SC": 12,
              "RTH-1": 0,
              "RTH-2": 8,
              "RTH-3": 8,
              "PS": 8,
              "R-1": 20,
              "R-2": 16,
              "K": 28,
              "KT": 20,
              "SPU-1": 16,
              "SPU-2": 16,
              "SPU-3": 16,
              "SPU-4": 16,
              "I": 16,
              "PL": 12
            },
            KLB: {
              "SC": 1.2,
              "RTH-1": 0,
              "RTH-2": 0.4,
              "RTH-3": 0.4,
              "PS": 0.4,
              "R-1": 4,
              "R-2": 3.2,
              "K": 4.8,
              "KT": 4,
              "SPU-1": 3.5,
              "SPU-2": 3.5,
              "SPU-3": 3.5,
              "SPU-4": 3.5,
              "I": 3.2,
              "PL": 2.4
            },
            KDH: {
              "SC": 10,
              "RTH-1": 0,
              "RTH-2": 60,
              "RTH-3": 60,
              "PS": 60,
              "R-1": 10,
              "R-2": 10,
              "K": 10,
              "KT": 10,
              "SPU-1": 10,
              "SPU-2": 10,
              "SPU-3": 10,
              "SPU-4": 10,
              "I": 10,
              "PL": 10
            }
          }, {
            "Kelas": "5",
            "Keterangan": "Luas Tanah/Persil >= 1001m2",
            "Batas": {
              "min": 1001,
              "max": 100000
            },
            KDB: {
              "SC": 80,
              "RTH-1": 30,
              "RTH-2": 20,
              "RTH-3": 20,
              "PS": 20,
              "R-1": 80,
              "R-2": 80,
              "K": 80,
              "KT": 90,
              "SPU-1": 70,
              "SPU-2": 70,
              "SPU-3": 70,
              "SPU-4": 70,
              "I": 80,
              "PL": 80
            },
            Tinggi: {
              "SC": 12,
              "RTH-1": 20,
              "RTH-2": 8,
              "RTH-3": 8,
              "PS": 8,
              "R-1": 20,
              "R-2": 16,
              "K": 32,
              "KT": 24,
              "SPU-1": 24,
              "SPU-2": 24,
              "SPU-3": 24,
              "SPU-4": 24,
              "I": 16,
              "PL": 12
            },
            KLB: {
              "SC": 1.2,
              "RTH-1": 1.5,
              "RTH-2": 0.4,
              "RTH-3": 0.4,
              "PS": 0.4,
              "R-1": 4,
              "R-2": 3.2,
              "K": 6.4,
              "KT": 4.8,
              "SPU-1": 4.2,
              "SPU-2": 4.2,
              "SPU-3": 4.2,
              "SPU-4": 4.2,
              "I": 3.2,
              "PL": 2.4
            },
            KDH: {
              "SC": 10,
              "RTH-1": 60,
              "RTH-2": 60,
              "RTH-3": 60,
              "PS": 60,
              "R-1": 10,
              "R-2": 10,
              "K": 10,
              "KT": 10,
              "SPU-1": 10,
              "SPU-2": 10,
              "SPU-3": 10,
              "SPU-4": 10,
              "I": 10,
              "PL": 10
            }
          })
          .then(() => console.log('finished populating intensitas'))
          .catch(err => console.log('error populating intensitas', err));
      }); //Seed Intensitas


  }
}
