import React from "react";
import RepositoriesContainer from "../repositories/RepositoriesContainer";
import OrganizationsContainer from '../organisations/OrganizationsContainer'
import {makeStyles} from "@material-ui/styles";
import ProfileContainer from "../profile/ProfileContainer";
import NavbarContainer from "../navbar/NavbarContainer";
import { Route, Routes } from "react-router-dom";

const useStyles = makeStyles({
  contentWrapper: {
  },
  contentInner: {
    width: '100%',
    borderTop: '1px solid #ccc',
    padding: '20px 0'
  }
})

const Content = (props: any) => {
  const styles = useStyles()

  const pagesArray = [
    {component: <RepositoriesContainer />, path: `/${props.userName}/repos`},
    {component: <OrganizationsContainer />, path: `/${props.userName}/orgs`},
  ]


  const makeContent = () => pagesArray.map((item, i) => (
    <Route key={i} path={`${item.path}`} element={item.component} />
  ))


  return !props.userName ? <>hhhh</> : (
    <>
      <Routes>
        <Route path={`/${props.userName}/*`} element={<ProfileContainer />} />
      </Routes>
      <div className={styles.contentWrapper}>
        <div>
          <NavbarContainer setActiveButton={props.setActiveButton} />
        </div>
        <div className={styles.contentInner}>
            <Routes>
                {makeContent()}
            </Routes>
        </div>
      </div>
    </>

  )



}

export default Content