

import axios from 'axios';
import Card from './Card';



export default async function Page() {
  const articlesData = await axios.get("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e7244ecccee84d8586cfd6a8f365bb8e")
  let articles = articlesData.data.articles.filter((v:any) => v.urlToImage !== null)
  
 
      
 return (
    <Card articles={articles} />
    
  );

}

 

