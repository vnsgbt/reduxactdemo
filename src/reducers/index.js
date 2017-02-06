const initState = {unit : 3, counterValue: 0}

const counter = (state = initState, action) => {
    switch (action.type) {
        case 'INC': 
            return {
                ...state,
                counterValue: state.counterValue + state.unit
            }
        case 'DEC':
            return {
                ...state,
                counterValue: state.counterValue - state.unit
            }
        default:
            return state
    }
}

export default counter;