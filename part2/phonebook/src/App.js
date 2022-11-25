import { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: 2131231232 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterName, setFilterName] = useState("");
  const [isFiltered, setIsFiltered] = useState(false);
  const [filteredPersons, setFilteredPersons] = useState([]);

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  };

  const handleFilterNameChange = (e) => {
    setFilterName(e.target.value);
    if (e.target.value === "") {
      setIsFiltered(false);
      setFilteredPersons([]);
    } else {
      setIsFiltered(true);
      const newList = persons.filter((person) => {
        return person.name.toLowerCase().includes(e.target.value.toLowerCase());
      });
      setFilteredPersons(newList);
    }
  };

  const addPerson = (e) => {
    e.preventDefault();
    const addedPerson = { name: newName, number: newNumber };
    if (!persons.find((person) => person.name === addedPerson.name)) {
      setPersons([...persons, addedPerson]);
      setNewName("");
      setNewNumber("");
    } else {
      alert(`${addedPerson.name} is already added to the phonebook.`);
      setNewName("");
      setNewNumber("");
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        filterName={filterName}
        handleFilterNameChange={handleFilterNameChange}
      />
      <h2>Add New</h2>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons
        isFiltered={isFiltered}
        persons={persons}
        filteredPersons={filteredPersons}
      />
    </div>
  );
};

export default App;
