
import Nav from "./components/Nav/Nav";
import Login from "./components/Login/Login";

export default function Home() {
  return (
    <main className="overflow-hidden max-h-screen">
      <Nav Status="Solicitar Cadastro" />
      <Login />
    </main>
  );
}
