export default function SearchBox({ filter, onChangeFilter }) {
  return (
    <div>
      <h3>Find contacts by name </h3>
      <input
        type="text"
        placeholder="...Search"
        value={filter}
        onChange={onChangeFilter}
      ></input>
    </div>
  );
}
