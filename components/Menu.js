import styled from 'styled-components'

const Header = styled.header`
  font-family: 'Cookie';
  font-size: 1.5em;
  border-bottom: 1px solid #e2e2e2;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const MenuBar = styled.img`
  height: 3%;
  width: 2%;
  margin-left: .5em;
  align-items: center;
`

const Padding = styled.div`
  // background-color: black;
  flex-direction: row;
  padding: 3px;
`

const Content = styled(Header)`
  flex-direction: row;
  border-bottom: 1px;
`;


export default function Menu() {

    return (
        <Header>
            <Padding></Padding>
            <Content>
            <MenuBar src='/static/menu.png'></MenuBar>
            <div>The New Yorks Times</div>
            <MenuBar src='/static/login.png'></MenuBar>
            </Content>
            <Padding></Padding>
        </Header>
    )
    
}