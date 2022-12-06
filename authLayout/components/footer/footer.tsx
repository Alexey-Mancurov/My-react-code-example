import { BackgroundBlack, Language } from '@ui'
import { langList } from '../../../../translations/langList'
import styles from './footer.module.sass'

export const Footer = () => {
  return (
    <footer className={styles['footer']}>
      <div className='container'>
        <Language langList={langList} />
      </div>
      <BackgroundBlack position='right' />
    </footer>
  )
}
