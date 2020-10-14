import styled from 'styled-components'

const Header = styled.header`
  border-bottom: 3px solid #e2e2e2;
  display: flex;
  flex-direction: column;
  max-height: 25%;
  margin: 0;
`;

const Padding = styled.div`
  // background-color: black;
  flex-direction: row;
  padding: 3px;
`

const Content = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px;

  //font
  font-family: 'Cookie';
  font-size: 2.5em;

  padding: 0px; 
`;


const MenuBar = styled.img`
  height: 16px;
  width: 16px;
  margin: 0 .5em 0;
  align-self: center;
`

const Login = styled.button`
  height: 3em;
  width: 5em;
  margin-right: .5em;
  padding: 11px 12px 8p;
  align-self: center;
  border-radius: 3px;
  background-color: rgb(86, 123, 149);

  // font related
  font-weight: 700;
  font-family: Helvetica, sans-serif;
  text-align: center;
  font-size: .3em;
  color: white;
  // effect
  cursor: pointer;
`

const ItemContainer = styled.div`
  display: flex;
  max-height: 100%;
  width: 10%;
`


export default function Menu() {

    return (
        <Header>
            <Padding></Padding>
            <Content>
              <ItemContainer>
                <MenuBar src='/static/menu.png'></MenuBar>
                <MenuBar src='/static/search.png'></MenuBar>
              </ItemContainer>
              <div>The New Yorks Times</div>
              <Login>LOG IN</Login>
            </Content>
            <Padding></Padding>
        </Header>
    )
    
}