import React from 'react'
import Proptypes from 'prop-types'

import * as S from './styles'

const CheckBox = ({ name, label, checked, value, onChange, dataTestId }) => (
  <S.Wrapper>
    <label htmlFor={name}>
      <input type="checkbox" id={name} name={name} value={value} checked={checked} onChange={onChange} data-testid={dataTestId} />
      {label}
    </label>
  </S.Wrapper>
)

CheckBox.propTypes = {
  label: Proptypes.string.isRequired,
  name: Proptypes.string.isRequired,
  value: Proptypes.string.isRequired,
  onChange: Proptypes.func,
  checked: Proptypes.bool,
  dataTestId: Proptypes.string
}

CheckBox.defaultProps = {
  onChange: () => null,
  checked: false,
  dataTestId: ''
}

export default CheckBox
