import React from "react";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
  avatar: {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    borderRadius: '50%',
    backgroundPosition: 'center',
    cursor: 'pointer'
  }
})

const Avatar = (props: any) => {
  const propsStyles = {
    backgroundImage: `url(${props.url})`,
    height: props.height,
    width: props.height
  }

  const styles = useStyles()

  return (
    <div style={propsStyles} className={styles.avatar}></div>
  )
}
export default Avatar