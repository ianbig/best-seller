import styled from 'styled-components'
import {connect} from 'react-redux'
import {changeDate} from '../actions'

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


function DateBar({dispatch,date}) {

    const handleClick = (e) => {
        const target = e.currentTarget;
        if(target.id === 'pre') {
            if(date !== 1) {
                dispatch(changeDate(date, 'pre'));
            }
            return;
        }
        else if(target.id === 'next') {
            if(date !== 29) {
                dispatch(changeDate(date, 'next'));
            }
            return;
        }
    }

    return (
        <Date>
            <NavDate onClick={handleClick} id="pre"><pre> ﹤ </pre></NavDate>
            <Time>{`March ${date}, 2020`}</Time>
            <NavDate onClick={handleClick} id="next"><pre> ﹥ </pre></NavDate>
        </Date>
    )
}

const mapStateToProps = (state) => state;


export default connect(mapStateToProps)(DateBar)