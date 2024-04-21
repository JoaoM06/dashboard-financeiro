
import { useState } from "react"
import styles from "../styles/MainDashboard.module.css"

export function RowComponent(props){
    return<div className={styles.row}>
        <h3>{props.valor}</h3>
    </div>
}