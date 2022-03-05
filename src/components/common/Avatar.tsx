import React from "react";
import {makeStyles} from "@material-ui/styles";
import userPhoto from '../../assets/images/user-photo.png'

const useStyles = makeStyles({
  avatar: {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    borderRadius: '50%',
    backgroundPosition: 'center',
    cursor: 'pointer'
  },
  avatarWrapper: {
    padding: '3px',
    border: '1px solid #222',
    borderRadius: '50%'
  }
})

const Avatar = (props: any) => {

  // backgroundImage: `url(${props.url})`,

  const propsStyles = {
    backgroundImage: `url(${userPhoto})`,
    height: props.radius,
    width: props.radius
  }

  const styles = useStyles()

  return (
    <div className={styles.avatarWrapper}>
      <div style={propsStyles} className={styles.avatar}></div>
    </div>
    
  )
}
export default Avatar