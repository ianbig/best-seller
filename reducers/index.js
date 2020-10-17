import {FETCH_DATA_SUCCEED, CHANGE_DATE} from '../public/constant'

const initalData = {
    date: 1,
    data: []
}

export default function rootReducers(state=initalData, action) {
    if(action.type === FETCH_DATA_SUCCEED) {
        return {...state, data: action.payload};
    }

    else if(action.type === CHANGE_DATE) {
        // console.log(action.payload);
        return {...state, date: action.payload};
    }
    return state;
}