import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./features/users/usersSlice";

import SearchBar from "./components/SearchBar";
import CityFilter from "./components/CityFilter";
import UserList from "./components/UserList";

export default function App() {
  const dispatch = useDispatch();
  const { loading, error, cities } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f6f7fb", padding: "20px", fontFamily: "sans-serif" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <header style={{ marginBottom: "18px" }}>
          <h1 style={{ fontSize: "24px", fontWeight: 600 }}>Search User by Filter</h1>
          <p style={{ color: "#666", marginTop: "6px" }}>Search by name (present time)</p>
        </header>

        <section style={{ marginBottom: "18px", display: "flex", gap: "12px", flexWrap: "wrap", alignItems: "center" }}>
          <SearchBar />
          <CityFilter cities={cities} />
        </section>

        <div style={{ marginBottom: "12px", color: "#444" }}>
          {loading ? "Loading..." : error ? `Error: ${error}` : `Loaded`}
        </div>

        <main>
          <UserList />
        </main>
      </div>
    </div>
  );
}
