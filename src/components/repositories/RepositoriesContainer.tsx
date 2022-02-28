import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import Repositories from "./Repositories";

const RepositoriesContainer = () => {


  return <Repositories />
}

const mapStateToProps = () => ({

})

const mapDispatchToProps = () => ({

})

export default compose (
  connect (mapStateToProps, mapDispatchToProps),

) (RepositoriesContainer)