// import logo from './logo.svg';
import './App.css';


import HomeContainer from '../src/Containers/HomeContainers'
import HeaderContainer from './Containers/HeaderContainer';

function App() {
  return (
    <div className="App">
      {/* <h1>App Component</h1> */}
      <HeaderContainer />
      <HomeContainer />
    </div>
  );
}

export default App;
