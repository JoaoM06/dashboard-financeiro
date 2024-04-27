
import style from "../styles/DashboardResume.module.css"
import { soma, joao } from "../pages/dashboard/dataXml"

export function DashboardResume(){

    return<div className={style.container}>
        <div className={style.row}>
            <h3>Soma: R${soma.toFixed(2)}</h3>
        </div>

        <div className={style.row}>
            <h3>João (3%): R${joao.toFixed(2)}</h3>
        </div>
    </div>
}