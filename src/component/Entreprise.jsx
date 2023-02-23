import { Link } from "react-router-dom"

export default function Entreprise(){
    return(
        <>
            <div className="flex w-3/4 mx-auto mt-4 py-10 text-2xl items-center justify-between h-1/2">
                
                <div  className="w-1/3 flex text-center justify-center">
                <Link to={'/entreprise'}><span className="bg-red-300 hover:bg-red-500 w2/3 px-10 py-5 rounded-lg font-bold">Espace entreprise</span></Link>
                </div>
                <p className="w-1/2">A toi jeune Entreprise, perdue et égarée entre tous ces stagiaires et centres de formations. A qui peux tu donc faire confiance ? Tu ne sais pas, et bien suis moi!!</p>    
            </div>
        </>
    )
}