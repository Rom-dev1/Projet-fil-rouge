import img from '../img/network2.jpg'

export default function Partners(){
    return(
        <>
        <div className='relative'>
            <img className="w-full h-[500px] brightness-200 opacity-20 my-[100px]" src={img} alt=""/>
            <div className='bg-white opacity-70 w-3/4 h-[400px] rounded-2xl absolute bottom-[50px] left-[230px]'>
                <h1 className='brightness-50 text-center text-3xl font-bold '>Nos partenaires</h1>
                <p className='text-center mt-[200px]'>ICI on peut imaginer un slider/caroussel avec des logos de différentes entreprises</p>
            </div>
        </div>
        </>
    )
}