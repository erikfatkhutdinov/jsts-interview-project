import { makeStyles } from '@material-ui/styles'
import React from 'react'
import { NavLink } from 'react-router-dom'


const useStyles = makeStyles({
  navbarItem: {
    marginRight: '10px',
    marginBottom: '30px'
  },
  navbar: {
    display: 'flex'
  },
  navbarStyles: {
    color: '#222',
    fontWeight: 'bold',
    textDecoration: 'none',
    padding: '20px 40px',
    backgroundColor: '#fff',
    border: '1px solid #000',
    borderRadius: '5px',
    cursor: 'pointer',
    display: 'inline-block',
  },
  active: {
    color: '#fff',
    fontWeight: 'bold',
    textDecoration: 'none',
    padding: '20px 40px',
    backgroundColor: '#222',
    border: '1px solid #000',
    borderRadius: '5px',
    cursor: 'pointer',
    display: 'inline-block'
  },
  navlinkInner: {

  }
})

const Navbar = (props: any) => {
  const styles = useStyles()

  const makeNavbarItems = props.navbarItems.map((item: any, i: number) => {
    const path = `/${props.userName}/${item.path}`

    const onSetChapter = () => {
      props.setChapter(item.path)
    }

    return (
    <div key={i} className={styles.navbarItem}>
      <NavLink 
      onClick={onSetChapter}
      className={
        (navData) => navData.isActive 
          ? `${styles.navbarStyles} ${styles.active}` 
          : styles.navbarStyles
        } 
      to={path}
      ><span className={styles.navlinkInner}>{item.buttonName}</span></NavLink>
    </div>
    )
  })

  return <div className={styles.navbar}>{makeNavbarItems}</div>
}
export default Navbar