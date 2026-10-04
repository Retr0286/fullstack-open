const Persons = ({ personsToShow }) => {
  return (
    <ul>
      {personsToShow.map((person) => {
        // console.log(person);
        return (
          <li key={person.id}>
            {person.name} {person.number}
          </li>
        );
      })}
    </ul>
  );
};

export default Persons;
