import {
  ADD,
  GET_ALL,
  DELETE,
  COMPLETE,
  SAVE,
  LOAD
} from "../constants";

export const addNewItem = item => {
  return {
    type: ADD,
    payload: item
  };
};

export const allItems = () => {
  debugger;
  return {
    type: GET_ALL
  };
};

export const deleteItem = id => {
  return {
    type: DELETE,
    payload: id
  };
};

export const completeItem = id => {
  return {
    type: COMPLETE,
    payload: id
  };
};

export const save = items => {
  return {
    type: SAVE,
    payload: items
  };
}

export const load = () => {
  return {
    type: LOAD
  };
}
