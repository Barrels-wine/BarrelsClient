// @flow
import apiSchema from '../config/schema';

export const DEFAULT_ACTION = 'DEFAULT_ACTION';
export const LOADING = 'LOADING';
export const FAILURE_END_LOADING = 'FAILURE_END_LOADING';
export const DEFAULT_FAILURE = 'DEFAULT_FAILURE';
export const LIST_WINES_SUCCESS = 'LIST_WINES_SUCCESS';
export const COUNT_BOTTLES_SUCCESS = 'COUNT_BOTTLES_SUCCESS';

export const getWines = () => ({
  types: [LOADING, LIST_WINES_SUCCESS, FAILURE_END_LOADING],
  schema: apiSchema.LIST(apiSchema.WINE),
  payload: {
      request: {
          url: 'wines',
          method: 'GET',
      },
  }
});

export const countBottles = () => ({
    types: [DEFAULT_ACTION, COUNT_BOTTLES_SUCCESS, DEFAULT_FAILURE],
    payload: {
        request: {
            url: 'bottles/count',
            method: 'GET',
        },
    }
  });
