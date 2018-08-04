// @flow
export const DEFAULT_ACTION = 'DEFAULT_ACTION';
export const FETCH_REFERENCES_SUCCESS = 'FETCH_REFERENCES_SUCCESS';
export const DEFAULT_FAILURE = 'DEFAULT_FAILURE';

export const fetchReferences = () => ({
  types: [DEFAULT_ACTION, FETCH_REFERENCES_SUCCESS, DEFAULT_FAILURE],
  payload: {
      request: {
          url: 'references',
          method: 'GET',
      },
  }
});
