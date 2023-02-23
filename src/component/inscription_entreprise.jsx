export default function Inscription_entreprise(){
    return(
        <>
            <h1 className="text-center text-4xl font-semibold">Inscription Entreprise</h1>
            <div className="w-1/4 mx-auto p-4 mt-4 flex justify-center flex-col border-4 shadow bg-slate-100">
                
                <form className="" action="">
                    <div className="mt-4">
                        <label htmlFor="name" className="block">Nom</label>
                        <input className="border-2 border-black rounded w-full" type="text" id="name" name="name" />
                    </div>
                    <div className="mt-4">
                        <label htmlFor="firstname" id="firstname" className="block">Prenom</label>
                        <input className="border-2 border-black rounded w-full" type="text" id="firstname" name="firstname" />
                    </div>
                    <div className="mt-4">
                        <label htmlFor="orga" className="block">Nom de l'entreprise</label>
                        <input className="w-full border-2 border-black rounded" type="text" name="orga" id="orga" />
                    </div>
                    <div className="mt-4">
                        <label htmlFor="email" id="email" className="block">Email</label>
                        <input className="w-full border-2 border-black rounded" type="text" name="email" id="email" />
                    </div>
                    <div className="text-center">
                        <button className="w-1/2 p-4 m-8 bg-indigo-300 rounded-xl">Inscription</button>
                    </div>
                    

                </form>
            </div>
        </>
    )
}