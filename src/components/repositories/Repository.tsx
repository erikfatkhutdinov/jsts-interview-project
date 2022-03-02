import { makeStyles } from "@material-ui/styles";
import React from "react";
import { isPropertySignature } from "typescript";

const useStyles = makeStyles({
  repositoryWrapper: {

  },
  name: {},
  reposHeader: {},
  visibility: {},
  description: {},
  reposInfoWrapper: {},
  reposInfo: {},
  reposInfoDescription: {},
  reposInfoData: {}
})

const Repository = (props: any) => {

  const styles = useStyles()


  const makeReposInfo = props.reposInfo.map((item: any, i: number) => (
    <div key={i} className={styles.reposInfoWrapper}>
      <div className={styles.reposInfoDescription}>reposInfoDescription</div>
      <div className={styles.reposInfoData}>{item.data}</div>
    </div>
  ))

  return (
    <div className={styles.repositoryWrapper}>
      <div className={styles.reposHeader}>
        <div className={styles.name}>name</div>
        <div className={styles.visibility}>visibility</div>
      </div>
      <div className={styles.description}>repDescription</div>
      <div className={styles.reposInfoWrapper}>
        {makeReposInfo()}
      </div>
      
    </div>
  )
}

export default Repository