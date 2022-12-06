import { LoveAita } from '@assets'
import { Popup } from '@ui'
import { ReactSVG } from 'react-svg'
import styles from './popupReset.module.sass'

export interface PopupProps {
  setIsPopup: (value: React.SetStateAction<boolean>) => void
}

export const PopupReset: React.FC<PopupProps> = ({ setIsPopup }) => {
  return (
    <Popup
      className={styles['popup']}
      onClose={() => setIsPopup(false)}
      img={<ReactSVG src={LoveAita} />}
      title='Check your email'
      text='A link with instructions has been sent 
        to your work email. If you didn`t receive 
        it, please check your spam folder'
      btnText='Ok'
      btnAction={() => setIsPopup(false)}
    />
  )
}

export default PopupReset
