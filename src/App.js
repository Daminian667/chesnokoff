import './index.scss';
import Header from './components/header/header';
import Main from './components/main/main';
import Bankets from './pages/Bankets';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      { /*<Header />
      <Main />
      <Footer /> */}
      <Bankets />
    </div>
  );
}

export default App;
