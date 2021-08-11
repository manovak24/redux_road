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

        case 'travel': {
            if (state.supplies > 0) {
                return {
                    ...state,
                    supplies: state.supplies - (20 * action.payload),
                    distance: state.distance + (10 * action.payload),
                    days: action.payload
                }
            } else if (state.supplies <= -1) {
                return [...state]
            }  
        }

        case 'tippedWagon': {
            return {
                ...state,
                supplies: state.supplies - 30,
                distance: state.distance,
                days: state.days + 1
            }
        }

        default: {
            return state;
        }
    }
}

let wagon = gameReducer(undefined, {});

wagon = gameReducer(wagon, {
    type: 'travel',
    payload: 1
})

wagon = gameReducer(wagon, {
    type: 'gather'
})

wagon = gameReducer(wagon, {
    type: 'tippedWagon'
})

wagon = gameReducer(wagon, {
    type: 'travel',
    payload: 3
})


console.log(wagon);

