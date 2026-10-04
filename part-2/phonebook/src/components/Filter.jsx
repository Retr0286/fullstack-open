const Filter = ({ filter, handleFilter }) => {
  return (
    <div>
      <label htmlFor="filter">filter shown with:</label>{" "}
      <input value={filter} onChange={handleFilter} />
    </div>
  );
};

export default Filter;
