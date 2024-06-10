
import Image from "next/image";
import styles  from "./page.module.css";
import axios from 'axios';
import { GetStaticProps } from "next";



export default async function Page() {
  const articlesData = await axios.get("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e7244ecccee84d8586cfd6a8f365bb8e")
  let articles = articlesData.data.articles.filter((v:any) => v.urlToImage !== null)
    
 

 
  return (

    <div>
      <h1>Top business headlines</h1>
      <ul id={styles.articlesContainer} >
        {articles.map((article:any, index:any) => (
          <li className={styles.article}  key={index}>
            
            
            <div  className={styles.imgAndDesc} >
            <img className={styles.img} src={article.urlToImage} alt="Imagem nao encontrada" />
          <div className={styles.titleAndDesc} >
           <h2 className="articleTitle" >{article.title}</h2>
           <p className={styles.desc} >{article.description}</p> 
           </div>

           </div>
            <a className="readMore" href={article.url}  rel="noopener noreferrer">
              Read more
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
