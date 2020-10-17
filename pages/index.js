import Menu from '../components/Menu'
import MainContent from '../components/MainContent'
import styled from 'styled-components'


/** style-component styling for component */

const Padding = styled.div`
  width: 10%;
  height: 100%;
  display: block;
`

const Container = styled.div`
  min-width: 100%;
  min-height: 100%;
  display: flex;
  // flex-direction: column;
`
/** */


export default function Index() {
  return (
      <>
        < Menu/>
        <Container>
          <Padding></Padding>
          <MainContent />
          <Padding></Padding>
        </Container>
      </>
  )
}

