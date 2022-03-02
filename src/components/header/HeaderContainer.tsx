import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {useLocation} from "react-router-dom";
import Header from "./Header";
import {searchUser, updateInputText, setUserName} from "../../redux/header-reducer";


const HeaderContainer = (props: any) => {


  const location = useLocation()

  const path = location.pathname.slice(1).split('/')


  if (props.userInfo) {
  }


  return <Header {...props} path={path} />
}

const mapStateToProps = (state: any) => ({
  inputText: state.header.inputText,
  userName: state.header.userName,
  userInfo: state.userInfo.userData.login
})



export default compose (
  connect (mapStateToProps, {updateInputText, searchUser, setUserName})
) (HeaderContainer)


