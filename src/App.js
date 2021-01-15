import './App.css';
import Navbar from './Navbar.js'
import SignUp from './SignUp.js'
import Footer from './Footer.js'
import background from './images/watchSmall.jpg'
import {
  Route, Switch
} from "react-router-dom";
import Login from './login'
import About from './about'
import Contact from './contact'
import Account from './account'

function App() {
  return (
    <>
    <Navbar />
      <Switch>
        <div className="App" style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
        <Route exact path ="/" component={() => <SignUp />}/>
        <Route exact path ="/login" component={Login}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/contact' component={Contact}/>
        <Route exact path='/account' component={Account}/>
        </div>
      </Switch>
    <Footer />
    </>
  );
}

export default App;
