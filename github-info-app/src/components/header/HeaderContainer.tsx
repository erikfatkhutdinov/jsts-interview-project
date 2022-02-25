import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import Header from "./Header";

const HeaderContainer = () => {


  return <Header />
}

const mapStateToProps = () => ({

})

const mapDispatchToProps = () => ({

})

export default compose (
  connect (mapStateToProps, mapDispatchToProps),

) (HeaderContainer)


