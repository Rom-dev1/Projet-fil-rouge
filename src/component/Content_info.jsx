import desk from '../img/Desk.jpg'

export default function ContentInfo(){
    return(
        <>  
            <div className=" flex justify-between w-3/4 mx-auto mt-4">
                
                <div className="flex flex-col w-1/3 space-y-5" >
                    <h1 className='text-3xl font-bold'>CMRC, au coeur de l'IT</h1>
                    <p className='text-xl leading-10'>Notre équipe, au nombre extraordinaire de 4 personnes, dédiée à vos besoin met tout en oeuvre afin de répondre à vos attentes. Que vous soyez stagiaire, professionnel du secteur ou un organisme de formation, n'ayez crainte, on est la! </p>
                    <span className='text-xl'>Suivez le guide!</span>
                </div>
                <div className='w-1/2'>
                    <img src={desk} className="w-full" alt="" />
                </div>
            </div>
        </>
    )
}