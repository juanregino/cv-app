import './card.css'
function Card ({name,description,code,technologies,img}){
  return (
    
      <div className="card__container">
        <article className="card__article">
          <img src={`/imgs/${img}`} alt="image" className="card__img" />

          <div className="card__data">
            <h2 className="card__title">{name}</h2>
            <span className="card__description">{description}</span>
            <a href={code} className="card__button">
              View Code
            </a>
          </div>
        </article>
      </div>
    
  );
}

export default Card