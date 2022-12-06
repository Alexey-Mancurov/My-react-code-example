import { baseApi } from '@api'
import { useApiErrorPopup } from '../../../../utils/useApiErrorPopup'
import { useState } from 'react'
import { useAuth } from '../../contexts/useAuth'
import { currencyList } from '../../data/currencyList'

export const useEnterInfoForm = () => {
  const { apiErrorPopup } = useApiErrorPopup()
  const { email } = useAuth()
  const [isPopup, setIsPopup] = useState(false)
  const correctCurrencyList = currencyList.map(currency => currency.value)

  const onSubmit = (data: any) => {
    const correctData = { ...data }
    const currencySymbol = currencyList.find(item => item.value === correctData.currency)?.symbol
    correctData.manager_email = email
    correctData.currency = currencySymbol

    apiErrorPopup(baseApi.signUp(correctData))
      .then(() => setIsPopup(true))
      .catch(error => {
        console.error(error)
      })
  }

  return { onSubmit, correctCurrencyList, email, isPopup, setIsPopup }
}
