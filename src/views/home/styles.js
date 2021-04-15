import styled from 'styled-components'

export const Container = styled.div`
  background: #FFFFFF;
  border: 1px solid #D1DCE3;
  box-sizing: border-box;
  border-radius: 4px;
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  width: 608px;
  @media(max-width: 740px) {
    position: initial;
    transform: unset;
    height: 100vh;
  }
`

export const Flex = styled.div`
  padding: ${props => props.padding || '41px 56px'};
  width: ${props => `${props.width }%` || '100%'};
  background-color: ${props => props.backgroundColor || 'white'};
`

export const Title = styled.span`
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 30px;
  color: #656565;
`

export const Form = styled.form`
 margin-top: 22px;
 margin-bottom: 3px;
`

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

export const ResultText = styled.span`
  font-family: Source Sans Pro;
  font-style: italic;
  font-weight: ${props => (props.isTitle ? 'bold' : '400')};
  font-size: 16px;
  line-height: 20px;
  text-transform: ${props => (props.isTitle ? 'uppercase' : 'none')};
  color: ${props => (props.isTitle ? '#3D75BB' : '#5D9CEC')};
`

export const HR = styled.div`
  mix-blend-mode: normal;
  opacity: 0.3;
  border: 1px solid #5D9CEC;
  margin-bottom: 20px;
`

export const Error = styled.span`
  margin-top: 15px;
  display: block;
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: bold;
  font-size: 11px;
  line-height: 14px;
  color: red;
`
