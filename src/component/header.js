import img from '../img/network.jpg'
import logo from '../img/CMRC_2.png'
export default function Header(){

    return(
        <>
        <img src={img} className="absolute -z-10 w-full opacity-10" alt="" />
        <div className="flex justify-between flex-row content-center  w-3/4 m-auto mt-6 text-xl font-bold">
           <div className='flex items-center space-x-5'>
                <img src={logo} className="w-[200px] opacity-50" alt="" />
                <h2>[IT]car.net</h2>
            </div>
            <div className='flex items-center'>
                <nav>
                    <ul className="space-x-10 flex">
                        <li>Entreprise</li>
                        <li>Organisme de formation</li>
                        <li>Candidat</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </div>
        </div></>
        
    )
}