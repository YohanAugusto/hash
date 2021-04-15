import React from 'react'
import Proptypes from 'prop-types'

import * as S from './styles'

const Input = ({ name, label, information, onChange, onKeyDown, type, placeholder, error, dataTestId }) => (
  <S.Wrapper>
    <S.Label htmlFor={name}>{label}</S.Label>
    <S.Input data-testid={dataTestId} type={type} id={name} name={name} onChange={onChange} onKeyDown={onKeyDown} placeholder={placeholder} />
    {information && <S.Information>{information}</S.Information>}
    {error && <S.Information isError data-testid={`${dataTestId}-error`}>{error}</S.Information>}
  </S.Wrapper>
)

Input.propTypes = {
  label: Proptypes.string.isRequired,
  name: Proptypes.string.isRequired,
  onChange: Proptypes.func,
  onKeyDown: Proptypes.func,
  type: Proptypes.string,
  information: Proptypes.string,
  placeholder: Proptypes.string,
  error: Proptypes.string,
  dataTestId: Proptypes.string
}

Input.defaultProps = {
  onChange: () => null,
  onKeyDown: () => null,
  type: 'text',
  information: null,
  placeholder: null,
  error: null,
  dataTestId: ''
}

export default Input
