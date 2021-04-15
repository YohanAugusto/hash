import React from 'react'
import { render, screen, wait, fireEvent, waitForElement } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Home from '.'

test('renders without error', () => {
  render(<Home />)

  expect(screen.getByText('Simule sua Antecipação')).toBeInTheDocument()

  expect(screen.getByText('Informe o valor da venda *')).toBeInTheDocument()
  expect(screen.getByTestId('form-input-amount')).toBeInTheDocument()

  expect(screen.getByText('Informe o percentual de MDR *')).toBeInTheDocument()
  expect(screen.getByTestId('form-input-installments')).toBeInTheDocument()

  expect(screen.getByText('Períodos')).toBeInTheDocument()
  expect(screen.getByTestId('form-input-mdr')).toBeInTheDocument()

  expect(screen.getByTestId('form-button-submit')).toHaveTextContent('Simular')

  expect(screen.getByText('Você receberá:')).toBeInTheDocument()
})

test('simulate anticipate transaction with all periods', async () => {
  const { getByTestId } = render(<Home />)

  userEvent.type(screen.getByTestId('form-input-amount'), '5000')
  userEvent.type(screen.getByTestId('form-input-installments'), '1')
  userEvent.type(screen.getByTestId('form-input-mdr'), '1')
  userEvent.click(screen.getByTestId('form-period-1day'))
  userEvent.click(screen.getByTestId('form-period-15days'))
  userEvent.click(screen.getByTestId('form-period-30days'))
  userEvent.click(screen.getByTestId('form-period-90days'))

  await wait(() => fireEvent.click(getByTestId('form-button-submit')))

  const day1 = await waitForElement(() => getByTestId('result-1-day'))
  const day15 = await waitForElement(() => getByTestId('result-15-days'))
  const day30 = await waitForElement(() => getByTestId('result-30-days'))
  const day90 = await waitForElement(() => getByTestId('result-90-days'))

  expect(day1).toHaveTextContent('R$ 4902')
  expect(day15).toHaveTextContent('R$ 4925')
  expect(day30).toHaveTextContent('R$ 4950')
  expect(day90).toHaveTextContent('R$ 4950')
})

test('simulate anticipate transaction with one period', async () => {
  const { getByTestId } = render(<Home />)

  userEvent.type(screen.getByTestId('form-input-amount'), '5000')
  userEvent.type(screen.getByTestId('form-input-installments'), '1')
  userEvent.type(screen.getByTestId('form-input-mdr'), '1')
  userEvent.click(screen.getByTestId('form-period-1day'))

  await wait(() => fireEvent.click(getByTestId('form-button-submit')))

  const day1 = await waitForElement(() => getByTestId('result-1-day'))

  expect(day1).toHaveTextContent('R$ 4902')
})

test('simulate invalid amount', async () => {
  const { getByTestId } = render(<Home />)

  userEvent.type(screen.getByTestId('form-input-amount'), '999')
  userEvent.type(screen.getByTestId('form-input-installments'), '1')
  userEvent.type(screen.getByTestId('form-input-mdr'), '1')

  await wait(() => fireEvent.click(getByTestId('form-button-submit')))

  const amountError = await waitForElement(() => getByTestId('form-input-amount-error'))

  expect(amountError).toHaveTextContent('"amount" must be greater than or equal to 1000')
})

test('simulate invalid installments', async () => {
  const { getByTestId } = render(<Home />)

  userEvent.type(screen.getByTestId('form-input-amount'), '5000')
  userEvent.type(screen.getByTestId('form-input-installments'), '0')
  userEvent.type(screen.getByTestId('form-input-mdr'), '1')

  await wait(() => fireEvent.click(getByTestId('form-button-submit')))

  const amountError = await waitForElement(() => getByTestId('form-input-installments-error'))

  expect(amountError).toHaveTextContent('"installments" must be greater than or equal to 1')
})

test('simulate invalid mdr', async () => {
  const { getByTestId } = render(<Home />)

  userEvent.type(screen.getByTestId('form-input-amount'), '5000')
  userEvent.type(screen.getByTestId('form-input-installments'), '1')
  userEvent.type(screen.getByTestId('form-input-mdr'), '101')

  await wait(() => fireEvent.click(getByTestId('form-button-submit')))

  const amountError = await waitForElement(() => getByTestId('form-input-mdr-error'))

  expect(amountError).toHaveTextContent('"mdr" must be less than or equal to 100')
})
