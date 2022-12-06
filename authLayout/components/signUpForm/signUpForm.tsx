import { Send } from '@assets'
import { Button, Input } from '@ui'
import { AUTH_PAGE_ROUTE, ENTER_INFO_ROUTE } from '../../../../routes/constants'
import { Controller, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import styles from '../../../../pages/auth/authNavigation.module.sass'
import { useAuth } from '../../contexts/useAuth'

export const SignUpForm = () => {
  const { setEmail } = useAuth()
  const navigate = useNavigate()
  const {
    handleSubmit,
    control,
  } = useForm({ defaultValues: { email: '' } })

  const onSubmit = (data: any) => {
    setEmail(data.email)
    navigate(`${AUTH_PAGE_ROUTE}/${ENTER_INFO_ROUTE}`)
  }

  return (
    <form className={styles['form']} onSubmit={handleSubmit(onSubmit)}>
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
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <Input
            className={styles['input']}
            type='text'
            placeholder='Enter your work Email'
            onChange={onChange}
            value={value}
            error={Boolean(error)}
            errorText={error?.message}
          />
        )}
      />
      <Button view='black' startIcon={<img src={Send} alt='send' />} isSubmit>
        Sign up with Email
      </Button>
    </form>
  )
}

export default SignUpForm
