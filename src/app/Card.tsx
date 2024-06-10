'use client'
import styles  from "./page.module.css";

export  default  function Card({articles}:any){
    localStorage.clear()
    
    articles.forEach((e:any)=>{
        localStorage.setItem(e.title,JSON.stringify({"title":e.title,"content":e.content}))
        
    })
    const handleClick = (event:any)=>{
            console.log(event.target.title)
            
    }
  
    return (

        <div>
          <h1>Top business headlines</h1>
          <ul id={styles.articlesContainer} >
            {articles.map((article:any) => (
              <li className={styles.article}  >
                
                
              <div  className={styles.imgAndDesc} >
              <img className={styles.img} src={article.urlToImage} alt="Imagem nao encontrada" />
              <div className={styles.titleAndDesc} >
               <h2 className="articleTitle" >{article.title}</h2>
               <p className={styles.desc} >{article.description}</p> 
               </div>
    
               </div>
                <a title={article.title} href={`/detalhes/${encodeURIComponent(article.title)}`} onClick={handleClick} className="readMore"   >
                  Read more
                </a>
                
              </li>
            ))}
          </ul>
        </div>
      );
}