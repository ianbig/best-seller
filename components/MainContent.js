import Header from '../components/Header';
import HeaderBar from '../components/HeaderBar'
import Content from '../components/Content'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
`

export default function MainContent() {
    return (
        <Container>
            <Header/>
            <HeaderBar />
            <Content />
        </Container>
    )

}


// why use export default: to allow naming for other users
/** 
 * <pre>{JSON.stringify(data, null, 2)}</pre>
 * {data["results"].map( (item) => 
                    <BookList key={item.list_name} item={item} baseUrl={baseUrl} apiKey={apiKey}/>
                )} */

// bug: too many request