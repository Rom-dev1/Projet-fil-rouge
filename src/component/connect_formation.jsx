import { Link } from "react-router-dom"

export default function Connect_formation(){
    return(
        <>
            <h1 className="text-center text-4xl font-semibold">Connexion organisme de formation</h1>
            <div className="w-1/4 mx-auto p-4 mt-4 mb-[100px] flex justify-center flex-col border-4 shadow bg-slate-100">
                <form className="mb-[50px]" action="">
                    <div className="mt-4">
                        <label htmlFor="name" className="block">Nom d'utilisateur</label>
                        <input className="border-2 border-black rounded w-full" type="text" id="name" name="name" />
                    </div>
                    <div className="mt-4">
                        <label htmlFor="email" id="email" className="block">Email</label>
                        <input className="w-full border-2 border-black rounded" type="text" name="email" id="email" />
                    </div>
                   <div className="text-center">
                        <button className="p-4 w-1/2 mt-6 bg-slate-400 rounded">Connexion</button>
                   </div>
                </form>
                <div className="flex justify-between">
                        <p>Si vous n'etes pas encore inscrit sur notre formidable site</p>
                        <Link to={'/inscription-formation'}><span className="p-4  bg-slate-400 rounded">S'inscrire</span></Link>
                </div>
            </div>
        </>
    )
}