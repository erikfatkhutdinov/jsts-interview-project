import { makeStyles } from "@material-ui/styles";
import React from "react";
import Avatar from "../common/Avatar";

const useStyles = makeStyles({
  orgWrapper: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px'
  },
  avatar: {
    marginRight: '10px'
  },
  orgInfo: {},
  infoItem: {},
  itemDescription: {
    marginRight: '10px',
    color: '#aaa',
    fontSize: '12px'
  },
  itemData: {
    fontSize: '16px'
  }
})

const Org = (props: any) => {
  const styles = useStyles()

  const orgInfo = [
    {name: 'login', data: props.login},
    {name: 'description', data: props.description},
    {name: 'github', data: props.url},
  ]

  const makeOrgsInfo = () => orgInfo.map((item, i) => (
      <div key={i} className={styles.infoItem}>
        <span className={styles.itemDescription}>{item.name}:</span>
        <span className={styles.itemData}>{item.data}</span>
      </div>
    ))
  
  return (
    <div className={styles.orgWrapper}>
      <div className={styles.avatar}>
        <Avatar radius={'70px'} url={props.avatarUrl} />
      </div>
      <div className={styles.orgInfo}>
        {makeOrgsInfo()}
      </div>
    </div>
  )
}

export default Org