import books from '../public/book.json'
import styled from 'styled-components'

const Container = styled.div`
        border-right: 1px gray solid;
        height: 400px;
        max-width: 200px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        padding-right: 1.3em;
        margin-left: 1em;
`;
const ImgContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
        height: 40%;
        width: 100%;
        margin-bottom: 1em;
    `;
    const HeaderTexxt = styled.h1`
        color: gray;
        margin-top: 0;
        font-weight: lighter;
    `;
    const Img = styled.img`
        height: 100%;
        max-width: 80%;
        margin: auto auto;
    `;
    
    const TextContainer = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    `;
    const Header = styled.div`
        display: flex;
        flex-direction: column;
    `;
    const Onlist = styled.div`
        color: gray;
        font-size: .8em;
    `;
    const Title = styled.p`
        font-weight: lighter;
    `

export default function Book({book}) {

    const rank = book["rank"];
    const onList = book["weeks_on_list"];
    const description = book["description"];
    const title = book["title"];
    const author = book["author"];
    const img = book["book_image"];

    return (
        <Container>
            <ImgContainer>
                <HeaderTexxt>{rank}</HeaderTexxt>
                <Img src={img}/>
            </ImgContainer>
            <TextContainer>
                <Header>
                    <Onlist>{onList == 1? "NEW THIS WEEK":`${onList} WEEKS ON THE LIST`}</Onlist>
                    <Title>{title}</Title>
                    <div>by {author}</div>
                </Header>
                <p>{description}</p>
            </TextContainer>
        </Container>
    )
}