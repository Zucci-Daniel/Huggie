import * as actionTypes from '../Actions/actionTypes';

const initialSatate = {
    name: 'Null'
}

const reducer = (state = initialSatate, actions) => {
    switch (actions.type) {
        case actionTypes.SIGNUP: return{name: actions.value}
    }
    return state
}

export default reducer;