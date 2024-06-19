import logo from './logo.svg';
import './App.css';
import Maincomponent from './Componets/Maincomponent';
import Login from './Componets/Login';
import {Routes,Route} from "react-router-dom";
import Welcomepage from './Componets/Welcomepage';
import Mainchatarea from './Componets/Mainchatarea';
import Users from './Componets/Users';
import Groups from './Componets/Groups';
import Creategroup from './Componets/Creategroup';



function App() {
  return (
  
    <div className="App">
     
   {/* <Maincomponent/>
   <Login/> */}

   <Routes>
        <Route path="/"  element={<Login/>}/>
        <Route path="app" element={<Maincomponent/>}>
             
             <Route path='welcome'  element={<Welcomepage/>}></Route> 
             <Route path='chats' element={<Mainchatarea/>}></Route>
             <Route path="users" element={<Users/>}></Route>
             <Route path="groups" element={<Groups/>}></Route>
             <Route path="create-groups" element={<Creategroup/>}></Route>




        </Route>
   </Routes>
    
    </div>

   
   
  );
}

export default App;
