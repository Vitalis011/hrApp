const Person = (props) => {
  return (
    <div className="person">
      <h2>{props.name}</h2>
      <p>{props.tittle}</p>
      <p>{props.salary}</p>
      <p>{props.phone}</p>
      <p>{props.email}</p>
      <p>{props.animal}</p>
    </div>
  );
};

export default Person;
