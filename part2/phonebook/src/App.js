import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import PersonService from "./services/personService";
import ConfirmMessage from "./components/ConfirmMessage";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterName, setFilterName] = useState("");
  const [isFiltered, setIsFiltered] = useState(false);
  const [filteredPersons, setFilteredPersons] = useState([]);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    PersonService.getAll().then((response) => setPersons(response));
  }, []);

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

  const handleRemovePersonButton = (e) => {
    if (window.confirm("Do you want to delete this person?")) {
      PersonService.removePerson(e.target.dataset.key).then((r) =>
        PersonService.getAll().then((response) => setPersons(response))
      );
    }
  };

  const addPerson = (e) => {
    e.preventDefault();
    const addedPerson = { name: newName, number: newNumber };
    if (
      !persons.find(
        (person) => person.name.toLowerCase() === addedPerson.name.toLowerCase()
      )
    ) {
      PersonService.addPerson(addedPerson).then((response) => {
        setPersons([...persons, response]);
        setNewName("");
        setNewNumber("");
        setMessage(`Added ${addedPerson.name}`);
        setTimeout(() => {
          setMessage(null);
        }, 3000);
      });
    } else {
      if (
        window.confirm(
          `${addedPerson.name} is already added to the phonebook. Do you want to replace the old number with a new one?`
        )
      ) {
        const targetPerson = persons.find(
          (person) =>
            person.name.toLowerCase() === addedPerson.name.toLowerCase()
        );

        const updatedPerson = { ...targetPerson, number: newNumber };
        PersonService.updatePerson(updatedPerson).then((data) => {
          setPersons(
            persons.map((person) => (person.id !== data.id ? person : data))
          );
        });
        setNewName("");
        setNewNumber("");
      } else {
        setNewName("");
        setNewNumber("");
      }
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <ConfirmMessage message={message} />
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
        handleRemovePersonButton={handleRemovePersonButton}
      />
    </div>
  );
};

export default App;
