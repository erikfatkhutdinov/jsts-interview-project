import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles({
  repositoryWrapper: {
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    marginBottom: '10px',
    "&:hover": {
      backgroundColor: '#222',
      color: '#fff',
      '& $visibility': {
        border: '1px solid #fff',
      },
    }
  },
  name: {
    fontSize: '20px',
    marginRight: '15px'
  },
  reposHeader: {
    display: 'flex',
    marginBottom: '15px',
    alignItems: 'center'
  },
  visibility: {
    padding: '3px 15px',
    border: '1px solid #222',
    borderRadius: '15px'
  },
  reposInfoWrapper: {
    display: 'flex',
    alignItems: 'center'
  },
  reposInfoDescription: {},
  reposInfoData: {
    marginRight: '15px'
  },
  link: {
    textDecoration: 'none',
    color: '#222',
  }
})

const Repository = (props: any) => {
  const styles = useStyles()
  const repInfo = [props.language, props.lecense]
  const updated = props.updated[0]

  return (
    <a className={styles.link} target="_blank" rel="noreferrer" href={props.url}>
      <div  className={styles.repositoryWrapper}>
        <div className={styles.reposHeader}>
          <div className={styles.name}>{props.name}</div>
          <div className={styles.visibility}>{props.visibility}</div>
        </div>
        <div className={styles.reposInfoWrapper}>
          {repInfo.map((item, i) => item ? <div key={i} className={styles.reposInfoData}>{item}</div> : null)}
          <div className={styles.reposInfoData}>Updated {updated.count} {updated.timeWord} ago</div>
        </div>
      </div>
    </a>
  )
}
export default Repository