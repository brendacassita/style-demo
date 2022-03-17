import logo from './logo.svg';
import './App.css';
import Comp1 from './Comp1';
import Header from './Header';

function App() {
  return (
    <div className="container" style={{border:'5px solid'}}>
  <h1>H1 in App</h1>
  <h1 style={{color:'hotpink'}}>H1 in comp 1</h1>
  <Comp1 />
  <h3 style={{color:'orange'}}>inline comps</h3>
  <Header text="Header as H1"/>
  <Header text="2nd Header as H1"/>
  <Header text="Header as H2" as='h2'/>


    </div>
  );
}

export default App;
