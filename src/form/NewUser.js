import MyForm from './MyForm';

function NewUser(props) {
  // On cree une 'bouton' qui sert à creer declancher un event
  const saveUserDataHandler = (enteredUserData) => {
    const userData = {
      ...enteredUserData,
      // On cherche des ID aleatoires pour qu'ils ne se repetent pas
      id: Math.random().toString(),
    };
    props.onAddUser(userData);
  };
  
  return(
    <div>
      <MyForm
        onSaveUserData={saveUserDataHandler}
      />
    </div>
  )
}

export default NewUser;