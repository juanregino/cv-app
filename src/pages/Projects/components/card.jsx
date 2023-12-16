function Card ({name,description,code,technologies}){
  return(
    <div>
      <h5>
        {name}
      </h5>
     <h1>
      {description}
     </h1>
    </div>
  )
}

export default Card