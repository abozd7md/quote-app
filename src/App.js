import BrandExample from "./component/NavbarHeader";
import "./App.css";
import Body from "./component/Body";
import Sidenavbar from "./component/Sidenav";
function App(props) {
  return (
    <div dir="rtl" className="App">
      <Sidenavbar id="navbar" />
      <BrandExample />
      <Body data={props.data} />
    </div>
  );
}

export default App;
