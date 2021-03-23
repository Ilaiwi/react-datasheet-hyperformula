import "./styles.css";
import data from "./fixture";
import Sheet from "./Sheet";
import Provider from "./Provider";

export default function App() {
  return (
    <div className="App">
      <Provider initData={data}>
        <Sheet />
      </Provider>
    </div>
  );
}
