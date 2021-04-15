import styled from 'styled-components'

export const Wrapper = styled.div`
  display: block;
  margin-bottom: 26px;
  width: 100%;
`

export const Label = styled.span`
  display: block;
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: #656565;
  margin-bottom: 6px;
`

export const Information = styled.span`
  display: block;
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: bold;
  font-size: 11px;
  line-height: 14px;
  color: ${props => (props.isError ? 'red' : '#CECECE')};
`

export const Input = styled.input`
  background: #FFFFFF;
  border: 1px solid #DDE6E9;
  box-sizing: border-box;
  border-radius: 4px;
  height: 37px;
  width: 100%;
`
