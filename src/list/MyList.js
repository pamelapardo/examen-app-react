import Card from './Card'

function MyList({userData}){
  return(
    <div>
      {/* On fait un MAP(lire et aficher du ontenu) de la fonction Card */}
      {userData.map((data) => (
        <Card key={data.id} userData={data} />
      ))}
    </div>
  )
}

export default MyList;