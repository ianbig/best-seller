import Menu from '../components/Menu'
import MainContent from '../components/MainContent'
import styled from 'styled-components'
import "./_app.css";

const Padding = styled.div`
  width: 10%;
  height: 100%;
  background-color: black;
`

const Container = styled.div`
  min-width: 100%;
  min-height: 100%;
  display: flex;
  // flex-direction: column;
`


function MyApp() {
  return (
    <>
      <Menu/>
      <Container>
        <Padding></Padding>
        <MainContent />
        <Padding/>
      </Container>
      <footer></footer>
    </>
  )
}

export default MyApp

/**
 * state: url
 */
