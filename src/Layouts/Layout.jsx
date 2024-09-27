import React from 'react'
import styles from'./layout.modulr.css'
function Layout({children}) {
  return (
   <>
   <header className={styles.header}>
    <h1>Book App</h1>
    <p>
        <a href="#">Bootostart</a>
        | React.js Full Course
    </p>
   </header>
   {children}
   <footer className={styles.footer}>
    <p>Developed by HEROZARA with :)</p>
   </footer>
   </>
  )
}

export default Layout 