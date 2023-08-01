import { useEffect, useState } from "react";
import "./App.css";
import Menu from "./components/Menu/Menu";
import Loading from "./components/Loading/Loading";
import Error from "./components/Error/Error";
import Container from "./components/Container/Container";

const API_URL = process.env.REACT_APP_API_URL;

function App() {
  const [menuData, setMenuData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        setError("");
        setLoading(true);
        const response = await fetch(`${API_URL}/items`);
        const json = await response.json();
        const { data, error } = json;
        console.log(response)
        if (response.ok) {
          setMenuData(data);
          setLoading(false);
        } else {
          setError(error);
          setLoading(false);
        }
      } catch (err) {
        console.log(`<App /> useEffect error : ${err.message}`);
        setLoading(false);
        setError(err.message);
      }
    }
    fetchData();
  }, []);

  const renderContent = () => {
    if (loading) {
      return <Loading />;
    } else if (error) {
      return <Error error={error} />;
    } else {
      return <Menu menuData={menuData} />;
    }
  };
  return (
    <div className="App">
      <h1 className="title">Ristorante La'Italie</h1>
      <h4 className="sub__title">Menu</h4>
      <Container center={Boolean(error || loading)}>
        {renderContent()}
      </Container>
    </div>
  );
}

export default App;