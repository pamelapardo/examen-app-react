function Card(props){
  return(
    <div className="card-container">
      <h3 className="card-name">{props.userData.name}</h3>
      <p className="card-age">{props.userData.age}</p>
    </div>
  )
}

export default Card