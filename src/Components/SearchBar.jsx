import { useDispatch, useSelector } from "react-redux";
import { setQuery } from "../features/users/usersSlice";

export default function SearchBar() {
  const dispatch = useDispatch();
  const { query } = useSelector((s) => s.users);

  return (
    <input
      type="text"
      value={query}
      onChange={(e) => dispatch(setQuery(e.target.value))}
      placeholder="Type the name..."
      style={{
        padding: "10px 12px",
        borderRadius: "8px",
        border: "1px solid #ccc",
        fontSize: "14px",
        flex: "1 1 320px",
        minWidth: "200px",
      }}
    />
  );
}
