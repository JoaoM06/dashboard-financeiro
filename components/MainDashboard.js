import React, { useState } from "react"
import styles from "../styles/MainDashboard.module.css"
import { dataFormatada, numeros, valores, clientes } from "../pages/dashboard/dataXml"
import { RowComponent } from "./RowCreator.js"

export function MainDashboard(){
    const [data, setData] = useState("Data Indefinida")
    return(
        <>
        <div className={styles.container}>
            <div className={styles.column}>
                <div className={styles.row}>
                    <h3>Data</h3>
                </div>
                {dataFormatada.map((el)=> <RowComponent valor={el}/> )}
            </div>

            <div className={styles.column}>
                <div className={styles.row}>
                    <h3>Nota</h3>
                </div>
                {numeros.map((el)=> <RowComponent valor={el}/> )}
            </div>

            <div className={styles.column}>
                <div className={styles.row}>
                    <h3>Valor</h3>
                </div>
                {valores.map((el)=> <RowComponent valor={el}/> )}
            </div>

            <div className={styles.column}>
                <div className={styles.row}>
                    <h3>Cliente</h3>
                </div>
                {clientes.map((el)=> <RowComponent valor={el}/> )}
            </div>

        </div>
        </>
    )
}