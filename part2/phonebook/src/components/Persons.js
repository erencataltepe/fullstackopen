const Persons = ({ isFiltered, persons, filteredPersons }) => {
  return (
    <div>
      {(isFiltered === false ? persons : filteredPersons).map((person) => (
        <div key={person.name}>
          {person.name} {person.number}
        </div>
      ))}
    </div>
  );
};

export default Persons;
