import {
  ADD,
  GET_ALL,
  DELETE,
  COMPLETE
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
