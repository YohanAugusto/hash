import React from 'react'
import Proptypes from 'prop-types'
import * as S from './styles'

const Result = ({ transactions }) => (
  <>
    <S.ResultText isTitle>Você receberá:</S.ResultText>
    <S.HR />
    <S.Wrapper>
      {transactions[1] && (
        <>
          <S.ResultText>Amanhã:</S.ResultText>
          {' '}
          <S.ResultText isTitle data-testid="result-1-day">{`R$ ${ transactions[1]}`}</S.ResultText>
        </>
      )}
    </S.Wrapper>
    <S.Wrapper>
      {transactions[15] && (
        <>
          <S.ResultText>Em 15 dias:</S.ResultText>
          {' '}
          <S.ResultText isTitle data-testid="result-15-days">{`R$ ${ transactions[15]}`}</S.ResultText>
        </>
      )}
    </S.Wrapper>
    <S.Wrapper>
      {transactions[30] && (
        <>
          <S.ResultText>Em 30 dias:</S.ResultText>
          {' '}
          <S.ResultText isTitle data-testid="result-30-days">{`R$ ${ transactions[30]}`}</S.ResultText>
        </>
      )}
    </S.Wrapper>
    <S.Wrapper>
      {transactions[90] && (
        <>
          <S.ResultText>Em 90 dias:</S.ResultText>
          {' '}
          <S.ResultText isTitle data-testid="result-90-days">{`R$ ${ transactions[90]}`}</S.ResultText>
        </>
      )}
    </S.Wrapper>
  </>
)

Result.propTypes = {
  transactions: Proptypes.objectOf(Proptypes.any)
}

Result.defaultProps = {
  transactions: {}
}

export default Result
