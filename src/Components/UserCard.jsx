export default function UserCard({ user }) {
  return (
    <article style={{ backgroundColor: "#fff", padding: "16px", borderRadius: "12px", boxShadow: "0 1px 3px rgba(0,0,0,0.08)" }}>
      <h2 style={{ fontSize: "16px", fontWeight: 600, marginBottom: "6px" }}>{user.name}</h2>
      <div style={{ fontSize: "13px", color: "#666", marginBottom: "8px" }}>{user.company?.name}</div>

      <p style={{ margin: "0 0 6px", fontSize: "13px" }}>
        <strong>Email:</strong> {user.email}
      </p>
      <p style={{ margin: 0, fontSize: "13px" }}>
        <strong>m-phone:</strong> {user.phone}
      </p>
      <p style={{ marginTop: "10px", fontSize: "13px", color: "#444" }}>
        <strong>City:</strong> {user.address?.city}
      </p>
    </article>
  );
}
