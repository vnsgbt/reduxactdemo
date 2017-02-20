export const increment = () => ({
    type:'INC' 
})

export const decrement = () => ({
    type:'DEC' 
})

export const increment5 = () => ({
    type:'INC5' 
})

export const decrement5 = () => ({
    type:'DEC5' 
})

export const incrOdd = () => (dispatch, getState) => {
    const { counterValue } = getState();
    if (counterValue % 2 === 0) {
        return;
    }
    dispatch(increment());
}

export const incrAs = () => (dispatch) => {
    setTimeout(()=>{
        dispatch(increment())
    }, 1000)
}

export const none = () => ({
    type:"none"
})