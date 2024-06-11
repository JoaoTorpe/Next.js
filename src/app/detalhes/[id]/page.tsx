'use client'
import styles from "./page.module.css"
export default  function pages({params}:{
    params:{id:string}
}){
let key = decodeURIComponent(params.id)
let data = JSON.parse(localStorage.getItem(key) as string)
    return(
        <div>
       <a href="/">Voltar</a>
       <h1 className={styles.title} >{ data.title }</h1>

       <p className={styles.content} >{data.content}</p>
       </div>
    )
}