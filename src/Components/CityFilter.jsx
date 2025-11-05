import { useDispatch, useSelector } from "react-redux";
import { setCity } from "../features/users/usersSlice";

export default function CityFilter({ cities }) {
  const dispatch = useDispatch();
  const { city } = useSelector((s) => s.users);

  return (
    <select
      value={city}
      onChange={(e) => dispatch(setCity(e.target.value))}
      style={{
        padding: "10px 12px",
        borderRadius: "8px",
        border: "1px solid #ccc",
        fontSize: "14px",
        width: "220px",
      }}
    >
      {cities.map((c) => (
        <option key={c} value={c}>
          {c === "all" ? "All" : c}
        </option>
      ))}
    </select>
  );
}


