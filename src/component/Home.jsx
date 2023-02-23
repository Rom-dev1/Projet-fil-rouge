import Candidat from "./Candidat";
import ContentInfo from "./Content_info";
import Entreprise from "./Entreprise";
import Formation from "./Formation";
import Testimonials from "./Temoignage";
import Partners from "./paternaires";


export default function Home(){
    return(
        <>
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
        </>
    )
}