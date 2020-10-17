import BookList from './BookList'
import styled from 'styled-components'
import {connect} from 'react-redux'
import {useEffect} from 'react'
import FetchData from '../actions'

const Container = styled.div`
    // margin-bottom: 50px;
    border-bottom: 1px solid gray;
`

function stringifyDate(date) {
    if(date === 1) return '2020-03-01';
    else if(date === 8) return '2020-03-08';
    else if(date === 15) return '2020-03-15';
    else if(date === 22) return '2020-03-22';
    else if(date === 29) return '2020-03-29';
}

function Content({dispatch, data, date}) {
    const baseUrl = "https://api.nytimes.com/svc/books/v3/lists/"
    const apiKey = "api-key=jLRi1SY410cMHHlZQrsUJkK0dvtgtqu9"
    let category = undefined;
    // const data = null;
    const stringDate = stringifyDate(date);

    useEffect(
        () => dispatch(FetchData()), 
        []);

    // console.log(data)

    if(data) {
        category = data["results"];
        if(category) {
            category = category.slice(0,3);
        }
        else return <h1>Loading</h1>
        return (
            <>
                {

                    category.map( (item, index) => 
                        <Container><BookList key={`${item.list_name}-${index}`} item={item} baseUrl={baseUrl} apiKey={apiKey} date={stringDate}/></Container>
                        
                    )
                }
            </>
        )
    }

    return <h1>Loading</h1>

}

const MapStateToProps = (state) => {
    // console.log(state);
    return state;
}

export default connect(MapStateToProps)(Content); // pass this.props to the component