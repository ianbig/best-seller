import {FETCH_DATA_SUCCEED} from '../public/constant'

const initalData = {
    date: null,
    data: []
}

export default function rootReducers(state=initalData, action) {
    if(action.type === FETCH_DATA_SUCCEED) {
        // console.log(`Inside action`);
        return {...state, data: action.payload};
    }
    return state;
}