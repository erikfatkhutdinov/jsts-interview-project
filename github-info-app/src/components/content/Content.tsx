import React from "react";
import RepositoriesContainer from "../repositories/RepositoriesContainer";
import UserInfoContainer from "../user-info/UserInfoContainer";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
  contentWrapper: {
    display: 'grid',
    gridTemplateColumns: '6fr 4fr',
    margin: '0px 20px',
    columnGap: '15px'
  }
})

const Content = (props: object) => {

const styles = useStyles()
  return (
    <div className={styles.contentWrapper}>
      <RepositoriesContainer />
      <UserInfoContainer />
    </div>
  )
}

export default Content