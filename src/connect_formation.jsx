export default function Connect_formation(){
    return(
        <>
            <h1 className="text-center text-4xl font-semibold">Inscription Organisme de formation</h1>
            <div className="max-w-xl mx-auto mt-4 flex justify-center items-center flex-col border-4 shadow">
                
                <form className="" action="">
                    <div className="flex space-x-2 mt-4">
                        <label htmlFor="" id="name">Nom</label>
                        <input className="border-2 border-black rounded" type="text" id="name" name="name" />
                        <label htmlFor="" id="firstname">Prenom</label>
                        <input className="border-2 border-black rounded" type="text" id="firstname" name="firstname" />
                    </div>
                    <div className="w-full mt-4 space-x-2">
                        <label htmlFor="" id="orga">Nom de l'organisme</label>
                        <input className="border-2 border-black rounded" type="text" name="orga" id="orga" />
                    </div>
                    <div className="w-full mt-4 space-x-2">
                        <label htmlFor="" id="email">Email</label>
                        <input className="border-2 border-black rounded" type="text" name="email" id="email" />
                    </div>
                    

                </form>
            </div>
        </>
    )
}