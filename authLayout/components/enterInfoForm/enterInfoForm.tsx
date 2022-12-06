import cn from 'classnames'
import { Button, Input, Select } from '@ui'
import { useForm, Controller } from 'react-hook-form'
import styles from '../../../../pages/auth/authNavigation.module.sass'
import { useEnterInfoForm } from './useEnterInfoForm'
import { Navigate } from 'react-router-dom'
import { AUTH_PAGE_ROUTE, SIGN_UP_ROUTE } from '../../../../routes/constants'
import { PopupReset } from '../popupReset'

export const EnterInfoForm = () => {
  const { onSubmit, correctCurrencyList, email, isPopup, setIsPopup } = useEnterInfoForm()
  const { handleSubmit, control } = useForm()

  if (!email) return <Navigate to={`${AUTH_PAGE_ROUTE}/${SIGN_UP_ROUTE}`} />

  return (
    <>
      <form className={styles['form']} onSubmit={handleSubmit(onSubmit)}>
        <div className={cn(styles['row'], 'row')}>
          <Controller
            name='manager_first_name'
            control={control}
            rules={{
              required: {
                value: true,
                message: 'This field is required',
              },
            }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <Input
                required
                className={styles['input']}
                title='Name'
                onChange={onChange}
                value={value}
                error={Boolean(error)}
                errorText={error?.message}
              />
            )}
          />
          <Controller
            name='manager_surname'
            control={control}
            rules={{
              required: {
                value: true,
                message: 'This field is required',
              },
            }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <Input
                required
                className={styles['input']}
                title='Surname'
                onChange={onChange}
                value={value}
                error={Boolean(error)}
                errorText={error?.message}
              />
            )}
          />
        </div>
        <Controller
          name='company_name'
          control={control}
          rules={{
            required: {
              value: true,
              message: 'This field is required',
            },
          }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <Input
              required
              className={styles['input']}
              title='Company name'
              onChange={onChange}
              value={value}
              error={Boolean(error)}
              errorText={error?.message}
            />
          )}
        />
        <Controller
          name='position'
          control={control}
          rules={{
            required: {
              value: true,
              message: 'This field is required',
            },
          }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <Input
              required
              className={styles['input']}
              title='Position'
              onChange={onChange}
              value={value}
              error={Boolean(error)}
              errorText={error?.message}
            />
          )}
        />
        <Controller
          name='position'
          control={control}
          rules={{
            required: {
              value: true,
              message: 'This field is required',
            },
          }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <Input
              required
              className={styles['input']}
              title='Position'
              onChange={onChange}
              value={value}
              error={Boolean(error)}
              errorText={error?.message}
            />
          )}
        />
        <Controller
          name={`currency`}
          control={control}
          rules={{
            required: {
              value: true,
              message: 'This field is required',
            },
          }}
          render={({ field: { onChange }, fieldState: { error } }) => (
            <Select
              required
              title={'Reports currency'}
              className={cn(styles['select'], styles['button50'])}
              defaultValue={correctCurrencyList[0]}
              list={correctCurrencyList}
              onChange={onChange}
              error={Boolean(error)}
              errorText={error?.message}
            />
          )}
        />
        <Button view='black' className={styles['infoButton']} isSubmit>
          Get started
        </Button>
      </form>
      {isPopup && <PopupReset setIsPopup={setIsPopup} />}
    </>
  )
}
