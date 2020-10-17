import {useEffect, useState, useMemo} from 'react'
import styled from 'styled-components'
import Book from '../components/Book'

const Container = styled.div`
    min-width: 300px;
`

const BookContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-bottom: 1.5em;
    @media(max-width: 730px) {
        flex-direction: column;
    }
`
const Note = styled.p`
    text-align: center;
`

const ListName = styled.h2`
    font-size: 19px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 700;
`

export default function BookList({item, baseUrl, apiKey, date}) {
    const listName = item.list_name_encoded;
    const url = `${baseUrl}${date}/${listName}.json?${apiKey}`;
    const [data, setData] = useState(null);

    console.log(`rerendering booklist`)

    // const currentDate = useMemo(() => {console.log(`cuurent date changed`)}, [date]);

    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then((data) => setData(data['results']))
        .then(console.log(`fetch book`))
        .catch(console.log(`Error in fetching data from individual list`))
    }, [date]);

    if(data) {
        const listName = data['display_name'];
        const bookList = data['books'].slice(0,5);
        if(listName && bookList) {
            return (
                <Container>
                    <ListName>{listName}</ListName>
                    <BookContainer>
                    {
                        bookList.map(
                            (item, index) => <Book key={item.book_uri} book={item} />
                        )
                    }
                    </BookContainer>
                    <Note>When you purchase an independently ranked book through our site, we earn an affiliate commission.</Note>
                </Container>
            )
        } // avoid exceed Qota
    }
    return null;
}