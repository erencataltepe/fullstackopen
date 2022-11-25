const Filter = ({ filterName, handleFilterNameChange }) => {
  return (
    <div>
      Filter by name:{" "}
      <input value={filterName} onChange={handleFilterNameChange} />
    </div>
  );
};

export default Filter;
