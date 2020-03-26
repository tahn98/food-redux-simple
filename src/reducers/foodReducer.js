import { ADD_FOOD, DELETE_FOOD } from '../action/types';

const initialState = {
  foodList : []
};

const foodReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FOOD:
      return {
        ...state, foodList: state.foodList.concat({
          key: Math.random(),
          name: action.data
        })
      };
    case DELETE_FOOD:
      console.log(action.key);
      return {
        ...state, foodList : state.foodList.filter((item) => item.key !== action.data)
      };
    default:
      return state;
  }
}

export default foodReducer;