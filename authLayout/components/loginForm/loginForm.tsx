import cn from 'classnames'
import { LoginParams } from '@api'
import { Send } from '@assets'
import { Button, Input, Error } from '@ui'
import { useEffect, useRef, useState } from 'react'
import { useCookies } from 'react-cookie'
import { Controller, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { PopupReset } from '../popupReset'
import { LoginFormController } from './controller'
import styles from '../../../../pages/auth/authNavigation.module.sass'
import { Reset } from './reset'
import { useApiErrorPopup } from '../../../../utils/useApiErrorPopup'

export const LoginForm = () => {
  const {apiErrorPopup} = useApiErrorPopup()
  const controller = new LoginFormController(apiErrorPopup)
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginParams>()

  const [, setCookie] = useCookies([process.env['NX_AUTH_TOKEN_CORP'] as string])
  const navigate = useNavigate()

  const [errorEmail, setErrorEmail] = useState('')
  const [isPopup, setIsPopup] = useState(false)
  const [isPending, setIsPending] = useState(false)

  const emailInput = useRef<HTMLInputElement>(null)

  useEffect(() => {
    errors['email'] && emailInput.current?.focus()
  }, [errors['email']])

  return (
    <>
      <form
        className={styles['form']}
        onSubmit={handleSubmit(data =>
          controller.onSubmitLogin(data, navigate, setCookie, setIsPending),
        )}>
        <Controller
          name='email'
          control={control}
          rules={{
            required: {
              value: true,
              message: 'This field is required',
            },
            pattern: {
              value: /.+@.+\..+/,
              message: 'Incorrect email format',
            },
          }}
          render={({ field: { onChange, value } }) => (
            <Input
              inputRef={emailInput}
              className={styles['input']}
              type='text'
              placeholder='Enter your work Email'
              onChange={onChange}
              value={value}
              error={Boolean(errors['email']?.message || errorEmail)}
              errorText={errors['email']?.message || errorEmail}
            />
          )}
        />
        <Controller
          name='password'
          control={control}
          rules={{
            required: {
              value: true,
              message: 'This field is required',
            },
          }}
          render={({ field: { onChange, value } }) => (
            <Input
              type='password'
              className={styles['input']}
              placeholder='Password'
              onChange={onChange}
              value={value}
              error={Boolean(errors['password']?.message)}
            />
          )}
        />
        <Reset
          setIsPopup={setIsPopup}
          setErrorEmail={setErrorEmail}
          setIsPending={setIsPending}
          isPending={isPending}
          value={emailInput}
        />
        <Button
          view='black'
          className={cn(styles['button'], styles['loginBtn'])}
          startIcon={<img src={Send} alt='send' />}
          isSubmit>
          Log in with Email
        </Button>
      </form>
      {isPopup && <PopupReset setIsPopup={setIsPopup} />}
    </>
  )
}
export default LoginForm
