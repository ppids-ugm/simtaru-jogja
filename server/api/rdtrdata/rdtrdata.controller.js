/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/rdtrdatas              ->  index
 * POST    /api/rdtrdatas              ->  create
 * GET     /api/rdtrdatas/:id          ->  show
 * PUT     /api/rdtrdatas/:id          ->  upsert
 * PATCH   /api/rdtrdatas/:id          ->  patch
 * DELETE  /api/rdtrdatas/:id          ->  destroy
 */

'use strict';

import jsonpatch from 'fast-json-patch';
import Rdtrdata from './rdtrdata.model';

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

// Gets a list of Rdtrdatas
export function index(req, res) {
  return Rdtrdata.find().exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Rdtrdata from the DB
export function show(req, res) {
  return Rdtrdata.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Rdtrdata in the DB
export function create(req, res) {
  return Rdtrdata.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Upserts the given Rdtrdata in the DB at the specified ID
export function upsert(req, res) {
  if(req.body._id) {
    Reflect.deleteProperty(req.body, '_id');
  }
  return Rdtrdata.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, upsert: true, setDefaultsOnInsert: true, runValidators: true}).exec()

    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Updates an existing Rdtrdata in the DB
export function patch(req, res) {
  if(req.body._id) {
    Reflect.deleteProperty(req.body, '_id');
  }
  return Rdtrdata.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(patchUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Rdtrdata from the DB
export function destroy(req, res) {
  return Rdtrdata.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
