import React from "react";
import {makeStyles} from "@material-ui/styles";
import Org from "./Org";

const useStyles = makeStyles({
  userInfoWrapper: {
  },
  notFound: {
    padding: '20px',
    fontSize: '40px'
  }
})

const Organizations = (props: any) => {

  const styles = useStyles()

  const makeOrgs = props.orgs.map((item: any, i: number) => (
    <Org key={i} 
      avatarUrl={item.avatar_url} 
      description={item.description} 
      login={item.login} 
      url={item.url} 
    />
  ))

  return (
    <div className={styles.userInfoWrapper}>
      {props.orgs.length ? makeOrgs : <div className={styles.notFound}>Organizations not found</div>}
      {makeOrgs}
    </div>
  )
}

export default Organizations