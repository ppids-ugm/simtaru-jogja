/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/intensitasruangs              ->  index
 * POST    /api/intensitasruangs              ->  create
 * GET     /api/intensitasruangs/:id          ->  show
 * PUT     /api/intensitasruangs/:id          ->  upsert
 * PATCH   /api/intensitasruangs/:id          ->  patch
 * DELETE  /api/intensitasruangs/:id          ->  destroy
 */

'use strict';

import jsonpatch from 'fast-json-patch';
import Intensitasruang from './intensitasruang.model';

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if(entity) {
      return res.status(statusCode).json(entity);
    }
    return null;
  };
}

function patchUpdates(patches) {
  return function(entity) {
    try {
      // eslint-disable-next-line prefer-reflect
      jsonpatch.apply(entity, patches, /*validate*/ true);
    } catch(err) {
      return Promise.reject(err);
    }

    return entity.save();
  };
}

function removeEntity(res) {
  return function(entity) {
    if(entity) {
      return entity.remove()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if(!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

// Gets a list of Intensitasruangs
export function index(req, res) {
  return Intensitasruang.find().exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a list of Intensitasruangs
export function findQuery(req, res) {
  console.log('intensitas',req.query);
  var queryString = 'Keterangan '+ 'KDB.'+req.query.skrk + " "+'Tinggi.'+req.query.skrk + " " +
  'KLB.'+req.query.skrk + " " + 'KDH.'+req.query.skrk;

  return Intensitasruang.find({Kelas:req.query.kelas}, queryString).exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}


// Gets a single Intensitasruang from the DB
export function show(req, res) {
  return Intensitasruang.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Intensitasruang in the DB
export function create(req, res) {
  return Intensitasruang.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Upserts the given Intensitasruang in the DB at the specified ID
export function upsert(req, res) {
  if(req.body._id) {
    Reflect.deleteProperty(req.body, '_id');
  }
  return Intensitasruang.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, upsert: true, setDefaultsOnInsert: true, runValidators: true}).exec()

    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Updates an existing Intensitasruang in the DB
export function patch(req, res) {
  if(req.body._id) {
    Reflect.deleteProperty(req.body, '_id');
  }
  return Intensitasruang.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(patchUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Intensitasruang from the DB
export function destroy(req, res) {
  return Intensitasruang.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
