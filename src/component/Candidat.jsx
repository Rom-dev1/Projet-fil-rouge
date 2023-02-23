import { Link } from "react-router-dom"

export default function Candidat(){
    return(
        <>  <div >
                <div className="flex w-3/4 mx-auto mt-4 p-10 text-2xl items-center justify-between h-1/2">
                    <p className="w-1/2">A toi jeune stagiaire, perdu et égaré entre toutes ces ESN qui n'aspirent qu'a trouver l'entreprise idéale, sert toi de notre formidable site pour chercher, trouver le bonheur et le graal qu'est le STAGE</p>
                    <div  className="w-1/3 flex text-center justify-center">
                    <Link to={'/candidat'}><span className="bg-red-300 hover:bg-red-500 w2/3 px-10 py-5 rounded-lg font-bold">Candidat</span></Link>
                    </div>
                    
                </div>
            </div>
        </>
    )
}