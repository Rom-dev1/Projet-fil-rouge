import Candidat from "./component/Candidat";
import ContentInfo from "./component/Content_info";
import Entreprise from "./component/Entreprise";
import Formation from "./component/Formation";
import Header from "./component/header";
import Testimonials from "./component/Temoignage";
import Partners from "./component/paternaires";
import Footer from "./component/footer";
import Connect_formation from "./connect_formation";


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
          <Testimonials/>
          <Partners/>
      </div>
      <Footer/>
    </>
    
  );
}

export default App;
