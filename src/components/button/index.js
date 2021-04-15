import React from 'react'
import Proptypes from 'prop-types'

import * as S from './styles'

const Button = ({ children, onClick, dataTestId }) => (
  <S.Button type="button" onClick={onClick} data-testid={dataTestId}>
    {children}
  </S.Button>
)

Button.propTypes = {
  children: Proptypes.node.isRequired,
  onClick: Proptypes.func,
  dataTestId: Proptypes.string
}

Button.defaultProps = {
  onClick: () => null,
  dataTestId: ''
}

export default Button
