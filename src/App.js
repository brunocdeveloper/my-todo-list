import logo from './logo.svg';
import name from './name.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container-main">
        <div className="container-header">
          <img src={ name } alt="Nome do app" className="logoName"/>
          <p>somente um teste</p>
        </div>
      </div>
    </div>
  );
}

export default App;
