import Header from '../components/Header';
import HeaderBar from '../components/HeaderBar'
import Content from '../components/Content'
import styled from 'styled-components'


const Container = styled.div`
    display: flex;
    flex-direction: column;
    @media (min-height: 400px) {
        width: 100%;
    }
`

const MainContent = () => {
    
    return (
            <Container>
                <Header/>
                <HeaderBar />
                <Content />
            </Container>        
    )

}

export default MainContent;

/** 

const MapStateToProps = (state) => {
    console.log(state);
    return state;
}

export default connect(MapStateToProps)(MainContent); // pass this.props to the component

*/