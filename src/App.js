import React, {useState} from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';
import ErrorModel from './components/UI/ErrorModel';


function App() {

  const [usersList, setUsersList] = useState([]);
  const [showError, setShowError] = useState(false);

  const addUserHandler = (userData) => {
    setUsersList( (prevList) => {
      return [userData,...prevList];
    });
  };

  const errorHandler = (value) => {
    if (value === true) {
      setShowError(value);
    } else {
      setShowError(false);
    }
    
  };

  return (
    <div>
    {showError && <ErrorModel 
      title="Invalid Input"
      message="Please enter a valid name and age(non-empty values)."
      onConfirmError={errorHandler}
    />}
    
    <AddUser 
      onAddUser={addUserHandler}
      onError={errorHandler}
    />
    <UsersList
    users={usersList} />
    </div>
  );
}

export default App;
