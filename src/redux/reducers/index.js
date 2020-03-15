import { ADD, DELETE, COMPLETE, SAVE, LOAD } from "../constants";
import { localStorageProvider } from "../../services/localStorage";

const { load, save } = localStorageProvider();

const createToDo = (text, completed = false) => {
  return {
    id: new Date().getTime(),
    text: text,
    completed: completed
  };
};

const initialState = {
  allToDoItems: []
};

export const addIntoToDoList = (state = initialState, action) => {
  switch (action.type) {
    case ADD: {
      return {
        allToDoItems: [...state.allToDoItems, createToDo(action.payload)]
      };
    }

    case DELETE: {
      const id = action.payload;
      return {
        allToDoItems: [...state.allToDoItems.filter(item => item.id !== id)]
      };
    }

    case COMPLETE: {
      const res = state.allToDoItems.map(item => {
        if (item.id === action.payload) {
          item = createToDo(item.text, true);
        }
        return item;
      });

      return {
        allToDoItems: [...res]
      };
    }

    case SAVE: {
      save(action.payload);
      return {
        allToDoItems: [...state.allToDoItems]
      };
    }

    case LOAD: {
      return {
        allToDoItems: [...load()]
      };
    }

    default:
      return state;
  }
};
