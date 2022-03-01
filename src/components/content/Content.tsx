import React from "react";
import RepositoriesContainer from "../repositories/RepositoriesContainer";
import OrganisationsContainer from '../organisations/OrganisationsContainer'
import {makeStyles} from "@material-ui/styles";
import ProfileContainer from "../profile/ProfileContainer";
import UserNotFoundErrorContainer from "../error-page/UserNotFoundErrorContainer";
import NavbarContainer from "../../navbar/NavbarContainer";

const useStyles = makeStyles({
  contentWrapper: {
  }
})

const Content = (props: any) => {


  const styles = useStyles()

  return !props.isUserFound ? <></> : (
        <>
          <ProfileContainer />
          <div className={styles.contentWrapper}>
            <div>
              <NavbarContainer />
            </div>
            <RepositoriesContainer />
            <OrganisationsContainer />
          </div>
        </>
  )



}

export default Content