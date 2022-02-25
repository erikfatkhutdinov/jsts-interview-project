import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import Content from "./Content";

const ContentContainer = () => {


  return <Content />
}

const mapStateToProps = () => ({

})

const mapDispatchToProps = () => ({

})

export default compose (
  connect (mapStateToProps, mapDispatchToProps),

) (ContentContainer)