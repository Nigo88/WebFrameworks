import React from 'react'
import styles from'./Header.module.css';

export default function Header() {
    return (
        <div className={ styles.headerBackground }>
            <div className={ styles.container }>
            <div className={styles.brand}>HELSINGIN SANOMAT</div>
            <div style={{ color: 'white'}}>Etusivu</div>
            <div className={styles.header}>Uutiset</div>
            <div className={styles.header}>Lehdet</div>
            <div className={styles.header}>Asiakaspalvelu</div>
            <div className={styles.button}> Tilaa
            Kirjaudu 
            Valikko  
            </div>
           </div>
        </div>
    )
}
