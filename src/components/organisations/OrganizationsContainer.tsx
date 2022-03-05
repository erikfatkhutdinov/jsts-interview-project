import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import Organizations from "./Organizations";

const OrganizationsContainer = (props: any) => {
  return <Organizations {...props} />
}

const mapStateToProps = (state: any) => ({
  orgs: state.userInfo.orgsData
})


export default compose (
  connect (mapStateToProps, {}),
) (OrganizationsContainer)