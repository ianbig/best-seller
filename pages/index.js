import Menu from '../components/Menu'
import MainContent from '../components/MainContent'
import styled from 'styled-components'
import { Head } from 'next/document'


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
      <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, 
     user-scalable=0" />
      </head>
        < Menu/>
        <Container>
          <Padding></Padding>
          <MainContent />
          <Padding></Padding>
        </Container>
      </>
  )
}

