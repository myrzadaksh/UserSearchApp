import { useSelector } from "react-redux";
import UserCard from "./UserCard";

export default function UserList() {
  const { users, query, city } = useSelector((s) => s.users);

  const q = (query || "").trim().toLowerCase();
  const filtered = users.filter((u) => {
    const matchesCity = city === "all" || (u.address && u.address.city === city);
    const matchesQuery = q === "" || (u.name || "").toLowerCase().includes(q);
    return matchesCity && matchesQuery;
  });

  if (!filtered || filtered.length === 0) {
    return <div style={{ textAlign: "center", color: "#777", padding: "20px" }}>Users by typed name did not found</div>;
  }

  return (
    <div>
      <div style={{ marginBottom: "12px", color: "#444" }}>
        Found: <span style={{ fontWeight: 600 }}>{filtered.length}</span>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "16px" }}>
        {filtered.map((u) => (
          <UserCard key={u.id} user={u} />
        ))}
      </div>
    </div>
  );
}


