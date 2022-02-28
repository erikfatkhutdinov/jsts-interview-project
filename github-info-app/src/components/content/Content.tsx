import React from "react";
import RepositoriesContainer from "../repositories/RepositoriesContainer";
import OrganisationsContainer from '../organisations/OrganisationsContainer'
import {makeStyles} from "@material-ui/styles";
import ProfileContainer from "../profile/ProfileContainer";
import UserNotFoundErrorContainer from "../error-page/UserNotFoundErrorContainer";

const useStyles = makeStyles({
  contentWrapper: {
    display: 'grid',
    gridTemplateColumns: '6fr 4fr',
    columnGap: '15px'
  }
})

const Content = (props: any) => {

  const styles = useStyles()

  if (props.userDataErrorCode !== 0) return <UserNotFoundErrorContainer />

  return !props.userData.login ? <></> : (
        <>
          <ProfileContainer />
          <div className={styles.contentWrapper}>
            <RepositoriesContainer />
            <OrganisationsContainer />
          </div>
        </>
  )



}

export default Content