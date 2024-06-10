

export default  function pages({params}:{
    params:{id:string}
}){
let key = decodeURIComponent(params.id)
    return(
        <div>
       <a href="/">Voltar</a>
       <h1>{ key }</h1>
       </div>
    )
}