import styled from 'styled-components'
import date from '../public/date'

const Date = styled.div`
  display: flex;
  font-size: 11px;
`;

const Time = styled.pre`
  font-family: Arial, Helvetica, sans-serif;
`

const NavDate = styled.a`
    &:hover {
        cursor: pointer;
    }
`


export default function DateBar() {

    const handleClick = (e) => {
        const target = e.currentTarget;
        if(target.id === 'pre') {

        }
        else if(target.id === 'next') {
            
        }
    }

    return (
        <Date>
            <NavDate onClick={handleClick} id="pre"><pre> ﹤ </pre></NavDate>
            <Time> March 1, 2020 </Time>
            <NavDate onClick={handleClick} id="next"><pre> ﹥ </pre></NavDate>
        </Date>
    )
}