import React from 'react'
import {compose} from "redux";
import {connect} from "react-redux";
import UserNotFoundError from "./UserNotFoundError";

const UserNotFoundErrorContainer = (props: any) => {
  return <UserNotFoundError {...props} />
}

const mapStateToProps = (state: any) => ({
  userName: state.userInfo.userName
})

export default compose (
  connect (mapStateToProps, {}),
) (UserNotFoundErrorContainer)