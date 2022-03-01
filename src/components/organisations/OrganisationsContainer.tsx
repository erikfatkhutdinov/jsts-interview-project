import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import Organisations from "./Organisations";

const OrganisationsContainer = () => {


  return <Organisations />
}

const mapStateToProps = () => ({

})

const mapDispatchToProps = () => ({

})

export default compose (
  connect (mapStateToProps, mapDispatchToProps),

) (OrganisationsContainer)