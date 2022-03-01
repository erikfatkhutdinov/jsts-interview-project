import React, {useState} from 'react'
import {compose} from "redux";
import {connect} from "react-redux";
import Navbar from './Navbar'

const NavbarContainer = (props: any) => {

  

  return <Navbar {...props} />
}

const mapStateToProps = (state: any) => ({
  userName: state.header.userName
})

export default compose (
  connect (mapStateToProps, {})
) (NavbarContainer)