import React from "react";
import {makeStyles} from "@material-ui/styles";
import Repository from "./Repository";

const useStyles = makeStyles({
  repositoriesWrapper: {
  },
  reposContent: {}
})

const Repositories = (props: any) => {

  const styles = useStyles()

  debugger

   /* [
    {
    reposInfo: [
      description,
      data,
    ]
    name,
    visibility
    description
  }
  ]
  */ 


  
  const makeRepositories = props.repos.map((item: any, i:number) => {
    const reposInfo = [
      item.reposInfoDescription,
      item.reposInfoData
    ]

    return <Repository
     reposInfo={reposInfo} 
     name={item.name}
     visibility={item.visibility}
     repDescription={item.repDescription}
     key={i} />
  })
  

  return (
    <div className={styles.repositoriesWrapper}>{makeRepositories}</div>
  )
}

export default Repositories