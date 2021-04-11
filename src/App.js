import "./styles.css";
import Contador from "../contador";
export default function App() {
  return (
    <div className="App">
      <Contador valor={0} />
      <Contador valor={10} />
      <Contador valor={20} />
    </div>
  );
}
