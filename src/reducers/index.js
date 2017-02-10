const initState = {unit : 3, counterValue: 0, counterValue5: 0}

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
        case 'INC5': 
            return {
                ...state,
                counterValue5: state.counterValue5 + state.unit + 2
            }        
        case 'DEC5':
            return {
                ...state,
                counterValue5: state.counterValue5 - state.unit - 2
            }
        default:
            return state
    }
}

export default counter;