import './App.css';
import Header from './Header.js'
import SignUp from './SignUp.js'
import Footer from './Footer.js'
import background from './images/thinBlueSMALL.jpg'

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
      <Header />
      <SignUp />
      <Footer />
    </div>
  );
}

export default App;
