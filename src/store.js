import { createStore } from 'redux';

const countReducer = (state = {counter: 0}, action) => {
    if(action.type == "inc"){
        return{counter: state.counter + 1};
    }
    else if(action.type == "dec"){
        return{counter: state.counter - 1};
    }
    return state;
}

const store = createStore(countReducer);

export default store;