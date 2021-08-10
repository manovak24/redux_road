const initialWagonState = {
    supplies: 100,
    distance: 0,
    days: 0
}

const gameReducer = (state = initialWagonState, action) => {
    switch(action.type) {
        case 'gather': {
            return {
                ...state,
                supplies: state.supplies + 15,
                distance: state.distance,
                days: state.days + 1
            }
        }
        default: {
            return state;
        }
    }
}