import {useEffect, useState} from 'react'
import styled from 'styled-components'
import Book from '../components/Book'

const BookContainer = styled.div`
    display: flex;
    justify-content: flex-start;
`

export default function BookList({item, baseUrl, apiKey}) {
    const listName = item.list_name_encoded;
    const date = item.newest_published_date;
    const url = `${baseUrl}${date}/${listName}.json?${apiKey}`;
    const [data, setData] = useState(null);

    useEffect(() => {
        console.log('hi')
        fetch(url)
        .then((res) => res.json())
        .then((data) => setData(data['results']))
        .then(() => console.log('fetching finish'))
        .catch(console.error)
    }, []);

    if(data) {
        // console.log(data);
        const listName = data['display_name'];
        const bookList = data['books'].slice(0,5);
        if(listName && bookList) {
            return (
                <>
                    <h3>{listName}</h3>
                    <BookContainer>
                    {
                        bookList.map(
                            (item, index) => <Book key={item.book_uri} book={item} />
                        )
                    }
                    </BookContainer>
                </>
            )
        } // avoid exceed Qota
    }

    return null; // return to Error page
}