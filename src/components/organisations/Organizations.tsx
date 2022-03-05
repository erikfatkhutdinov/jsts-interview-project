import React from "react";
import DataNotFound from "../error-page/DataNotFound";
import Org from "./Org";

const Organizations = (props: any) => {
  const makeOrgs = () => props.orgs.map((item: any, i: number) => (
     <Org key={i} 
      avatarUrl={item.avatar_url} 
      description={item.description} 
      login={item.login} 
      url={item.url.replace('api.','')} 
    />
  ))
  return props.orgs.length ? makeOrgs() : <DataNotFound notFoundData={'Organizations'} />
}

export default Organizations