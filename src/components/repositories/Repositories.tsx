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

  const makeRepositories = props.repos.map((item: any, i:number) => {
   

    const updated = item.pushedAt

    return <Repository
      language={item?.language}
      lecense={item.license?.name}
      url={item.url}
      name={item.name}
      updated={updated}
      visibility={item.visibility}
      key={i} />
  })
  

  return (
    <div className={styles.repositoriesWrapper}>{makeRepositories}</div>
  )
}

export default Repositories