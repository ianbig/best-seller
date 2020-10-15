import styled from 'styled-components'

const Button = styled.button`
    background-color: #326891;
    border-radius: 3px;
    color: white;
    height: 1.5rem;
    width: 4rem;
    margin: 0px;
`

export default function BuyButton() {
    return (
        <>
            <Button>BUY▾</Button>
        </>
    )
}