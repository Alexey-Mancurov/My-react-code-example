import { Button, BackgroundBlack } from '@ui'
import cn from 'classnames'
import { Link, useLocation } from 'react-router-dom'
import styles from './header.module.sass'
import { ArrBack } from '@assets'
import { AUTH_PAGE_ROUTE, SIGN_UP_ROUTE } from '../../../../routes/constants'

export const Header = () => {
  const { pathname } = useLocation()
  const isSign = pathname.includes('sugnUp')
  const isEnterInfo = pathname.includes('enterInfo')
  const isNoLogin = isSign || isEnterInfo

  return (
    <header className={styles['header']}>
      <div className={cn(styles['container'])}>
        {isEnterInfo ? (
          <Link to={SIGN_UP_ROUTE} className={styles['back']}>
            <img src={ArrBack} alt='back' />
          </Link>
        ) : (
          <button></button>
        )}

        <Link className={styles['login']} to={isNoLogin ? AUTH_PAGE_ROUTE : SIGN_UP_ROUTE}>
          <Button view='grayBorder'>{isNoLogin ? 'Login' : 'Sign up'}</Button>
        </Link>
      </div>
      <BackgroundBlack className={styles['bg']} position='right' />
    </header>
  )
}

export default Header
