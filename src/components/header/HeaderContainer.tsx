import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {useLocation} from "react-router-dom";
import Header from "./Header";
import {searchUser, updateInputText, setUserName, setChapter} from "../../redux/header-reducer";
import { useNavigate } from "react-router-dom";


const HeaderContainer = (props: any) => {
  const location = useLocation().pathname
  const path = location.slice(1).split('/')

  let navigate = useNavigate();
  
  const getUserFromPath = () => {
    if (!(props.inputText.length || props.userName.length)) {
      if (path[0]?.length) props.searchUser(path[0])
      if (path[1]?.length) props.setChapter(path[1])
    }
  }
  getUserFromPath()
  
  const searchUser = (userName: string = '') => {
    props.setUserName(userName)
    props.searchUser(userName)
  }

  return <Header {...props} navigate={navigate} searchUser={searchUser} path={path} />
}

const mapStateToProps = (state: any) => ({
  inputText: state.header.inputText,
  userName: state.header.userName,
  userInfo: state.userInfo.userData.login,
  chapter: state.header.chapter
})



export default compose (
  connect (mapStateToProps, {updateInputText, searchUser, setChapter, setUserName})
) (HeaderContainer)


