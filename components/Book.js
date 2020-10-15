import styled from 'styled-components'
import BuyButton from './BuyButton'

const Container = styled.div`
        border-right: 1px gray solid;
        height: 400px;
        max-width: 200px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-right: 1.3em;
        margin-left: 1em;
`;
const ImgContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    height: 40%;
     width: 100%;
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
        margin-top: 30px;
    `;
    const Header = styled.div`
        display: flex;
        flex-direction: column;
    `;
    const Onlist = styled.div`
        color: gray;
        font-size: 11px;
        margin: 0;
    `;
    const Title = styled.p`
        font-weight: bold;
        margin: 1px;
        font-size: 16px;
    `;

    const Author = styled.div`
        font-size: 15px;
        
    `

    const Des = styled.p`
        margin-top: 10px;
        font-size: 14px;
        @media (max-width: 1000px) {
            display:none;
        }
    `
const Info = styled.div`
    height: 90%;
    min-width: 100%;
    display: flex;
    flex-direction: column;
    //justify-content: flex-start;
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
            <Info>
                <ImgContainer>
                    <HeaderTexxt>{rank}</HeaderTexxt>
                    <Img src={img}/>
                </ImgContainer>
                <TextContainer>
                    <Header>
                        <Onlist>{onList == 1? "NEW THIS WEEK":`${onList} WEEKS ON THE LIST`}</Onlist>
                        <Title>{title}</Title>
                        <Author>by {author}</Author>
                    </Header>
                    <Des>{description}</Des>
                </TextContainer>
           </Info>
           <BuyButton/>
        </Container>
    )
}