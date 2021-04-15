/* eslint-disable no-console */
import React, { useCallback, useState } from 'react'
import { anticipateTransaction } from 'services'

import Input from 'components/input'

import CheckBox from 'components/checkbox'
import Button from 'components/button'
import Result from './result'
import * as S from './styles'

const Home = () => {
  const [transactions, setTransactions] = useState({})
  const [errorsList, setErrorsList] = useState([])

  const [formInputs, setFormInputs] = useState({
    amount: null,
    installments: null,
    mdr: null,
    days: null
  })

  const loadTransactions = useCallback(
    async () => {
      try {
        const data = await anticipateTransaction(formInputs?.amount, formInputs?.installments, formInputs?.mdr, formInputs?.days)
        setTransactions(data)
        setErrorsList([])
      } catch (errors) {
        console.error(errors)
        setErrorsList(errors)
        setTransactions({})
      }
    },
    [formInputs]
  )

  const updateInput = (e) => {
    const timer = setTimeout(setFormInputs({ ...formInputs, [e.target.name]: e.target.value }), 1000)
    clearTimeout(timer)
  }

  const updateCheckbox = (e) => {
    let days = formInputs.days || []

    if (days?.indexOf(e.target.value) === -1) {
      days.push(e.target.value)
    } else {
      days = days.filter(day => day !== e.target.value)
    }

    const timer = setTimeout(setFormInputs({ ...formInputs, days }), 1000)
    clearTimeout(timer)
  }

  // Load Transactions by enter button

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      loadTransactions()
    }
  }

  return (
    <S.Container>
      <S.Flex width="60">
        <S.Title>Simule sua Antecipação</S.Title>
        <S.Form>
          <Input
            dataTestId="form-input-amount"
            name="amount"
            label="Informe o valor da venda *"
            onChange={updateInput}
            onKeyDown={handleKeyDown}
            placeholder="1000"
            error={errorsList.find(error => error.includes('amount'))}
          />
          <Input
            dataTestId="form-input-installments"
            name="installments"
            label="Em quantas parcelas *"
            information="Máximo de 12 parcelas"
            onChange={updateInput}
            onKeyDown={handleKeyDown}
            placeholder="1"
            error={errorsList.find(error => error.includes('installments'))}
          />
          <Input
            dataTestId="form-input-mdr"
            name="mdr"
            label="Informe o percentual de MDR *"
            onChange={updateInput}
            onKeyDown={handleKeyDown}
            placeholder="4"
            error={errorsList.find(error => error.includes('mdr'))}
          />

          <S.Wrapper>
            <S.Label htmlFor="mdr">Períodos</S.Label>
            <CheckBox dataTestId="form-period-1day" name="1day" label="Amanhã" onChange={updateCheckbox} value="1" checked={formInputs?.days?.includes('1')} />
            <CheckBox dataTestId="form-period-15days" name="15days" label="15 dias" onChange={updateCheckbox} value="15" checked={formInputs?.days?.includes('15')} />
            <CheckBox dataTestId="form-period-30days" name="30days" label="30 dias" onChange={updateCheckbox} value="30" checked={formInputs?.days?.includes('30')} />
            <CheckBox dataTestId="form-period-90days" name="90days" label="90 dias" onChange={updateCheckbox} value="90" checked={formInputs?.days?.includes('90')} />
          </S.Wrapper>
        </S.Form>
        <Button onClick={loadTransactions} dataTestId="form-button-submit">Simular</Button>
        <S.Error>
          {errorsList.filter(error => !error.includes('mdr') && !error.includes('installments') && !error.includes('amount')).length > 0
        && 'Ops! Algo deu errado!'}
        </S.Error>
      </S.Flex>
      <S.Flex width="40" backgroundColor="rgba(209, 220, 227, 0.18)" padding="83px 35px">
        <Result transactions={transactions} />
      </S.Flex>
    </S.Container>
  )
}

export default Home
