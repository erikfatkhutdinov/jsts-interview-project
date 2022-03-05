import React from "react";
import {makeStyles} from "@material-ui/styles";
import ProfileContainer from "../profile/ProfileContainer";
import NavbarContainer from "../navbar/NavbarContainer";

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
  
  return !props.userName ? <></> : (
    <>
      <ProfileContainer />
      <div className={styles.contentWrapper}>
          <NavbarContainer setActiveButton={props.setActiveButton} />
        <div className={styles.contentInner}>
            {props.pagesArray.filter((t: any) => t.path === props.chapter)[0]?.component}
        </div>
      </div>
    </>
  )
}
export default Content