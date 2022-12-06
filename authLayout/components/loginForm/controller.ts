import { baseApi, LoginParams } from '@api'
import { ACTIVITY_PAGE_ROUTE } from '../../../../routes/constants'
import { NavigateFunction } from 'react-router-dom'
import { CookieSetOptions } from 'universal-cookie'
import { ApiErrorPopup } from '../../../../utils/useApiErrorPopup'

export class LoginFormController {
  constructor(private apiErrorPopup: ApiErrorPopup) {}

  onSubmitLogin = (
    data: LoginParams,
    navigate: NavigateFunction,
    setCookie: (name: string, value: any, options?: CookieSetOptions | undefined) => void,
    setIsPending: React.Dispatch<React.SetStateAction<boolean>>,
  ) => {
    const { email, password } = data
    setIsPending(true)
    this.apiErrorPopup(baseApi.login({ email, password }))
      .then(res => {
        setCookie(process.env['NX_AUTH_TOKEN_CORP'] as string, res.auth_token)
        navigate(`/${ACTIVITY_PAGE_ROUTE}`)
      })
      .catch(err => {
        console.error(err)
      })
      .finally(() => setIsPending(false))
  }

  resetPassword = (
    setIsPending: React.Dispatch<React.SetStateAction<boolean>>,
    setIsPopup: (value: React.SetStateAction<boolean>) => void,
    setErrorText: React.Dispatch<React.SetStateAction<string>>,
    value: string | undefined,
  ) => {
    setIsPending(true)
    if (/.+@.+\..+/.test(value as string)) {
      this.apiErrorPopup(baseApi.sendResetPasswordEmail(value as string))
        .then(() => {
          setIsPopup(true)
        })
        .catch(error => {
          console.error(error)
        })
        .finally(() => setIsPending(false))
    } else {
      setErrorText('Incorrect email format')
      setIsPending(false)
    }
  }
}
