import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import UserInfo from "./UserInfo";

const UserInfoContainer = () => {


  return <UserInfo />
}

const mapStateToProps = () => ({

})

const mapDispatchToProps = () => ({

})

export default compose (
  connect (mapStateToProps, mapDispatchToProps),

) (UserInfoContainer)