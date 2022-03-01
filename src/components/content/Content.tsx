import React, { useState } from "react";
import RepositoriesContainer from "../repositories/RepositoriesContainer";
import OrganizationsContainer from '../organisations/OrganizationsContainer'
import {makeStyles} from "@material-ui/styles";
import ProfileContainer from "../profile/ProfileContainer";
import NavbarContainer from "../navbar/NavbarContainer";

const useStyles = makeStyles({
  contentWrapper: {
  },
  contentInner: {
    width: '100%',
    borderTop: '1px solid #ccc',
    paddingTop: '20px'
  }
})

const Content = (props: any) => {

  const [activeButton, setActiveButton] = useState('');

  const styles = useStyles()

  const contentPages = [
    {component: <RepositoriesContainer />, id: 'repos'},
    {component: <OrganizationsContainer />, id: 'orgs'},
  ]


  return !props.isUserFound ? <></> : (
        <>
          <ProfileContainer />
          <div className={styles.contentWrapper}>
            <div>
              <NavbarContainer setActiveButton={setActiveButton} />
            </div>
            <div className={styles.contentInner}>
              {contentPages.filter(item => item.id === activeButton)[0]?.component}
            </div>
            
          </div>
        </>
  )



}

export default Content