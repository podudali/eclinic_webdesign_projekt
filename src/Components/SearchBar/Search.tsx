import React from 'react'
import { BsSearch } from 'react-icons/bs';
import styles from './Search.module.css'


export default function Search() {
    return (
        <section className={styles.searchCointainer}>
            <div className={styles.search}>
                <input type="text" />
            </div>
            <div className={styles.icon}>
                <BsSearch color='#000' size={22} />
            </div>
        </section>
    )
}
