const Persons = ({
  isFiltered,
  persons,
  filteredPersons,
  handleRemovePersonButton,
}) => {
  return (
    <div>
      {(isFiltered === false ? persons : filteredPersons).map((person) => (
        <div key={person.id}>
          {person.name} {person.number}{" "}
          <button data-key={person.id} onClick={handleRemovePersonButton}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Persons;
