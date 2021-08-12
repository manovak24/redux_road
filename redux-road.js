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
            if (state.supplies < 0) {
                return state
            }
            return {
                ...state,
                supplies: state.supplies - (20 * action.payload),
                distance: state.distance + (10 * action.payload),
                days: state.days + action.payload
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

wagonMoveOne = gameReducer(wagon, {
    type: 'travel',
    payload: 1
})

wagonMoveTwo = gameReducer(wagon, {
    type: 'gather'
})

wagonMoveThree = gameReducer(wagon, {
    type: 'tippedWagon'
})

wagonMoveFour = gameReducer(wagon, {
    type: 'travel',
    payload: 3
})

wagonMoveFour = gameReducer(wagon, {
    type: 'travel',
    payload: 10
})

console.log(wagonMoveOne);
console.log(wagonMoveTwo);
console.log(wagonMoveThree);
console.log(wagonMoveFour);
