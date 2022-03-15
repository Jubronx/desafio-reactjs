import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Rotas from './routes.js';
import {Container, Typography} from '@material-ui/core'


function App() {
  return (
   <Router>
     <Container maxWidth="lg">
        <Rotas/>
     </Container>
   </Router>
  );
}

export default App;
