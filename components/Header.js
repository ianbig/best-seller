import styled from 'styled-components'

const Heading = styled.h1`
  margin: 0;
`

const SubHeading = styled.div`
  margin: 0;
  color: gray;
  margin-bottom: 1em;
`

export default function Header() {
    return (
        <>
            <h4>Books</h4>
            <Heading>The New York Times Best Sellers</Heading>
            <SubHeading>Authoritatively ranked lists of books sold in the United States, sorted by format and genre.</SubHeading>
        </>
    )
}