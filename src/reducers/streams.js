/* eslint-disable no-case-declarations */
import {
  CREATE_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
  EDIT_STREAM,
  DELETE_STREAM
} from '../actions';

export default (state = {}, { type, payload }) => {
  switch(type) {
    case CREATE_STREAM:
      return { ...state, [payload.id]: payload };
    case FETCH_STREAM:
      return { ...state, [payload.id]: payload };
    case FETCH_STREAMS:
      const newStreams = payload.reduce((dict, stream) => {
        dict[stream.id] = stream;
        return dict;
      }, {});
      return { ...state, ...newStreams };
    case EDIT_STREAM:
      return { ...state, [payload.id]: payload };
    case DELETE_STREAM:
      const newState = { ...state };
      delete newState[payload];
      return { ...newState };
    default:
      return state;
  }
};
