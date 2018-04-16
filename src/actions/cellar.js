// @flow
import apiSchema from '../config/schema';

export const DEFAULT_ACTION = 'DEFAULT_ACTION';
export const DEFAULT_FAILURE = 'DEFAULT_FAILURE';
export const LIST_WINES_SUCCESS = 'LIST_WINES_SUCCESS';

export const getWines = () => ({
  types: [DEFAULT_ACTION, LIST_WINES_SUCCESS, DEFAULT_FAILURE],
  schema: apiSchema.LIST(apiSchema.WINES),
  payload: {
      request: {
          url: 'wines',
          method: 'GET',
      },
  }
});
