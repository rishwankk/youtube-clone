import './App.css';
import Header from './components/Header';
import Body from './components/Body';

function App() {
  return (
    <div className="App">
      <Header />
      <Body /> {/* Ensure <Body /> has the Outlet for nested routes */}
    </div>
  );
}

export default App;
