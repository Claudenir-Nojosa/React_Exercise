import React,{useState} from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';


function App() {

  const [resultsForm, setResultsForm] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setResultsForm((prevResultsForm) => {
      return [...prevResultsForm, { name: uName, age: uAge, id: Math.random().toString()}];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={resultsForm} />
    </div>
  );
}

export default App;
