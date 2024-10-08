const initalState = {
    value: 0,
};

const countReducer = (state = initalState, action) => {
    switch (action.type) {
        case 'INCREASE_COUNT':
            return { ...state, count: state.count + 1 };
        case 'DECREASE_COUNT':
            return { ...state, count: state.count - 1 };
        default:
            return state
    }
}

export default countReducer; 