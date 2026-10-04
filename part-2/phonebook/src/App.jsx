import { useState } from "react";
import { Filter, PersonForm, Persons } from "./components";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [filter, setFilter] = useState("");

  const addPerson = (event) => {
    event.preventDefault();

    const newPerson = {
      name: newName,
      phone: newPhone,
      id: persons.length + 1,
    };

    const validName = persons.some(
      (person) => person.name.toLowerCase() == newName.toLowerCase(),
    );
    const validPhone = persons.some((person) => person.phone == newPhone);
    // console.log("Variable validName:", valid);

    if (validName) {
      alert(`${newName} is already added to phonebook`);

      setNewName("");
      setNewPhone("");
    } else if (validPhone) {
      alert(`${newPhone} is already added to phonebook`);

      setNewName("");
      setNewPhone("");
    } else {
      setPersons(persons.concat(newPerson));

      // console.log(persons);
      setNewName("");
      setNewPhone("");
    }
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value);
  };

  const handleFilter = (event) => {
    setFilter(event.target.value);
  };

  const personsToShow = filter
    ? persons.filter((person) =>
        person.name.toLowerCase().includes(filter.toLowerCase()),
      )
    : persons;

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter filter={filter} handleFilter={handleFilter} />

      <PersonForm
        addPerson={addPerson}
        newName={newName}
        newPhone={newPhone}
        handleNameChange={handleNameChange}
        handlePhoneChange={handlePhoneChange}
      />

      <h2>Numbers</h2>

      <Persons personsToShow={personsToShow} />
    </div>
  );
};

export default App;
