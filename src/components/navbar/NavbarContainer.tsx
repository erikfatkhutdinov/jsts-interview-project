import React, {useState} from 'react'
import {compose} from "redux";
import {connect} from "react-redux";
import Navbar from './Navbar'
import { setChapter } from '../../redux/user-info-reducer';

const NavbarContainer = (props: any) => {
    const navbarItems = [
    {path: 'repos', buttonName: 'Repositories'},
    {path: 'orgs', buttonName: 'Organisations'},
  ]
  
  return <Navbar navbarItems={navbarItems} {...props} />
}

const mapStateToProps = (state: any) => ({
  userName: state.userInfo.userName,
  chapter: state.userInfo.chapter
})

export default compose (
  connect (mapStateToProps, {setChapter})
) (NavbarContainer)