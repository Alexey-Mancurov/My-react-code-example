import styles from './privacyText.module.sass'
export const PrivacyText = () => {
  return (
    <p className={styles['info']}>
      <strong>By confirming your email, you agree to our</strong>{' '}
      <a href='https://www.appintheair.mobi/termsofuse' target='_blank' rel='noreferrer'>
        Terms conditions
      </a>{' '}
      <strong>and</strong>{' '}
      <a href='https://www.appintheair.mobi/privacypolicy' target='_blank' rel='noreferrer'>
        Privacy Policy
      </a>
    </p>
  )
}
