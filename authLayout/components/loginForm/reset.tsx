import { LoadButton } from '@ui'
import cn from 'classnames'
import styles from '../../../../pages/auth/authNavigation.module.sass'
import { LoginFormController } from './controller'
import { useApiErrorPopup } from '../../../../utils/useApiErrorPopup'

export interface ResetProps {
  setIsPopup: (value: React.SetStateAction<boolean>) => void
  setErrorEmail: React.Dispatch<React.SetStateAction<string>>
  setIsPending: React.Dispatch<React.SetStateAction<boolean>>
  isPending: boolean
  value: React.RefObject<HTMLInputElement>
}

export const Reset: React.FC<ResetProps> = ({ setIsPopup, setErrorEmail, setIsPending, isPending, value }) => {
  const { apiErrorPopup } = useApiErrorPopup()

  const controller = new LoginFormController(apiErrorPopup)

  return (
    <p className={cn(styles['info'], styles['reset'])}>
      Forgot your password?{' '}
      <button
        type='button'
        onClick={() => {
          setIsPending(true)
          controller.resetPassword(setIsPending, setIsPopup, setErrorEmail, value.current?.value)
        }}>
        Reset
      </button>
      {isPending && <LoadButton color='#3D73EC' className={styles['resetLoader']} />}
    </p>
  )
}
