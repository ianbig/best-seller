import {FETCH_DATA_SUCCEED, CHANGE_DATE} from '../public/constant'

export function FatchDateSucceed(lists) {
    // console.log(lists);
    return (
        {
            type: FETCH_DATA_SUCCEED,
            payload: lists
        }
    )
}

export default function FetchData() {
    const baseUrl = "https://api.nytimes.com/svc/books/v3/lists/"
    const apiKey = "api-key=jLRi1SY410cMHHlZQrsUJkK0dvtgtqu9"
    const request = "names.json?";
    const requestList = baseUrl + request + apiKey;

    return dispatch => {
        fetch(requestList)
        .then((res) => res.json())
        .then((res) => dispatch(FatchDateSucceed(res)))
        .catch(console.error);
    }
}

export function changeDate(date, chageType) {
    // console.log(date);
    // console.log(chageType)
    return (
        {
            type: CHANGE_DATE,
            payload: chageType === 'pre' ? date -7: date + 7
        }
    )
}