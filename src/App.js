import Candidat from "./component/Candidat";
import ContentInfo from "./component/Content_info";
import Entreprise from "./component/Entreprise";
import Formation from "./component/Formation";
import Header from "./component/header";


function App() {
  return (
    <>
      <Header/>
      <div>
          <ContentInfo/>
          <div className="bg-slate-100">
            <Candidat/>
            <Entreprise/>
            <Formation/>
          </div>
          
      </div>
    </>
    
  );
}

export default App;
