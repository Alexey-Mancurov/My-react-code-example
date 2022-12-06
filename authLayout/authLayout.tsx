import { BackgroundBlack } from '@ui'
import { Outlet } from 'react-router-dom'
import cn from 'classnames'
import styles from './auth.module.sass'
import { Footer } from './components/footer'
import { Header } from './components/header'
import { DrinkinsNew } from '@assets'
import { AuthProvider } from './contexts/useAuth'

interface AuthProps {
  className?: string
}

export const AuthLayout: React.FC<AuthProps> = ({ className }) => {
  return (
    <AuthProvider>
      <Header />
      <div className={cn(styles['auth'], 'auth', className)}>
        <Outlet />
        <BackgroundBlack className={styles['background']} position='right'>
          <div className={cn(styles['line'], styles['green'])}></div>
          <div className={cn(styles['line'], styles['red'])}></div>
          <img className={styles['img']} src={DrinkinsNew} alt='company line' />
        </BackgroundBlack>
      </div>
      <Footer />
    </AuthProvider>
  )
}

export default AuthLayout
