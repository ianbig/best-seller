import Menu from '../components/Menu'
import MainContent from '../components/MainContent'
import styled from 'styled-components'
import  Head  from 'next/head'


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
  overflow-x: hidden;
  // flex-direction: column;
`
/** */


export default function Index() {
  return (
      <>
      <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, 
     user-scalable=no, minimum-scale=1.0" />
      </Head>
        < Menu/>
        <Container>
          <Padding></Padding>
          <MainContent />
          <Padding></Padding>
        </Container>
      </>
  )
}

