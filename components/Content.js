import {useEffect, useState} from 'react'
import BookList from './BookList'
import styled from 'styled-components'

export const Loader = styled.div`
    border: 16px solid #f3f3f3;
    border-radius: 50%;
    border-top: 16px solid #3498db;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(180deg); }
}
`

const Container = styled.div`
    // margin-bottom: 50px;
    border-bottom: 1px solid gray;
`

export default function MainContent() {
    const baseUrl = "https://api.nytimes.com/svc/books/v3/lists/"
    const apiKey = "api-key=jLRi1SY410cMHHlZQrsUJkK0dvtgtqu9"
    const request = "names.json?";
    const requestList = baseUrl + request + apiKey;
    const [data, setdata] = useState(null);
    let category = undefined;
    
    useEffect(() => {
       fetch(requestList)
       .then((res) => res.json())
       .then((data) => setdata(data))
       .catch(console.error)
    }, []);

    if(data) {
        category = data["results"].slice(0,4);
        return (
            <>
                {

                    category.map( (item) => 
                        <Container><BookList key={item.list_name} item={item} baseUrl={baseUrl} apiKey={apiKey}/></Container>
                        
                    )
                }
            </>
        )
    }

    return <h1>Loading</h1>

}