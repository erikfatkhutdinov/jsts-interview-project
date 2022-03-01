import React, { ReactChild, ReactNode } from "react";
import Avatar from "../common/Avatar";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
  profile: {
    display: 'flex',
    marginBottom: '30px',
  },
  avatar: {
    textAlign: 'center',
    marginRight: '20px'
  },
  info: {

  },
  login: {
    fontSize: '15px',
    marginTop: '10px',
  },
  name: {
    fontSize: '40px',
    marginBottom: '10px'
  },
  additionalInfo: {},
  additionalInfoItem: {
    marginBottom: '5px',
  },
  description: {
    color: '#aaa',
    marginRight: '10px'
  },
  userInfo: {
    fontSize: '20px'
  },
  linkToGithub: {
    textDecoration: 'none',
    color: '#222',
  }
})

const Profile = (props: any) => {

  const styles = useStyles()

  const additionalInfo = props.additionalInfo.map((item: any, i: number): ReactNode => {
    const userInfoItem: any = Object.values(item.data)[0]
    if (userInfoItem) {
      return (
        <div key={i} className={styles.additionalInfoItem}>
          <span className={styles.description}>{item.description}:</span>
          <span className={styles.userInfo}>{userInfoItem}</span>
        </div>
      )
    }
  })

  return (
    <div className={styles.profile}>
      <div className={styles.avatar}>
        <Avatar height={'200px'} url={props.avatar_url} />
        <div className={styles.login}>{props.login}</div>
      </div>

      <div className={styles.info}>
        <div className={styles.name}>{props.name}</div>
        <div className={styles.additionalInfo}>
          {additionalInfo}
        </div>


        <div className={styles.additionalInfoItem}>
          <span className={styles.description}>Account was created on:</span>
          <span className={styles.userInfo}>{props.createdAt}</span>
        </div>

        <div className={styles.additionalInfoItem}>
          <span className={styles.description}>github</span>
          <a href={props.html_url} target="_blank" rel="noreferrer" className={`${styles.linkToGithub} ${styles.userInfo}`}>{props.html_url}</a>
        </div>
      </div>

    </div>
  )
}

export default Profile