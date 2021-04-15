/* eslint-disable no-console */
import axios from 'axios'

const API = axios.create({
  baseURL: process.env.REACT_APP_API,
  headers: {
    'Content-Type': 'application/json'
  }
})

const handleError = (errors) => errors?.split('. ')?.filter(error => error?.includes('"'))

export const anticipateTransaction = (amount, installments, mdr, days) =>
  API.post('', {
    amount,
    installments,
    mdr,
    days
  }).then(res => res.data).catch(error => {
    console.error(error.response)
    throw handleError(error?.response?.data)
  })
