import styled from 'styled-components'
import DateBar from './DateBar'

const Bar = styled.div `
  display: flex;
  justify-content: space-between;
  border-top: 1px solid gray;
  border-bottom: 2px solid black;
  margin-bottom: 2em;
`

const ChildBar = styled.select`
  border: 0px;
  border-right: 1px solid gray;
  margin: 2px;
  margin-left: 0px;
  padding: 3px;
  padding-left: 0px;
  width: 100%;
  font-size: .4em;
  text-align: start;
  min-width: 67px;
`

const ChildBarGroup = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 40%;
`

export default function HeaderBar() {
    return (
    <Bar>
        <ChildBarGroup>
          <ChildBar>
            <option>FICTION</option>
            <option>Combined Print & E-Book Fiction</option>
            <option>Hardcover Fiction</option>
            <option>Paperback Trade Fiction</option>
          </ChildBar>
          <ChildBar>
            <option>NONFICITION</option>
            <option>Combnied Print & E-Book NonFiction</option>
            <option>Hardcover Nonfiction</option>
            <option>Paperback Nonficition</option>
            <option>Advice, How-To & Miscellaneous</option>
          </ChildBar>
          <ChildBar>
            <option>CHILDREN'S</option>
            <option>Children’s Middle Grade Hardcover</option>
            <option>Children’s Picture Books</option>
            <option>Children’s Series</option>
            <option>Young Adult Hardcover</option>
          </ChildBar>
          <ChildBar>
            <option>MONTHLY LISTS</option>
            <option>Audio Fiction</option>
            <option>Audio Nonfiction</option>
            <option>Business</option>
            <option>Graphic Books and Manga</option>
            <option>Mass Market</option>
            <option>Middle Grade Paperback</option>
            <option>Young Adult Paperback</option>
          </ChildBar>
        </ChildBarGroup>
        <DateBar/>
      </Bar>
    )
}