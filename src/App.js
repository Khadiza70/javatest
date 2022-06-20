
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import { Checkout } from './Componant/c-form/Checkout';

import { FormModal } from './Componant/FormModal';


function App() {
  return (
    <div className="App">
     {/* <Checkout/> */}
     <Checkout/>
     <FormModal/>
    </div>
  );
}

export default App;
