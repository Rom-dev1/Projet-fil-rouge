
import Header from "./component/header";
import Footer from "./component/footer";
import { Outlet } from "react-router-dom";


function App() {
  return (
    <>
      <Header/>

        <Outlet/>
        
      <Footer/>
      
    </>
    
  );
}

export default App;
