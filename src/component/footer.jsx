import fb from '../img/facebook-icon.svg'
import tw from '../img/twitter-icon.svg'
import yt from '../img/youtube-icon.svg'
import logo from '../img/CMRC_2.png'

export default function Footer(){
    return(
        <>
            <div className="flex m-auto my-10 w-3/4 justify-between" id="footerTop">
                <div>
                    <h4>principal</h4>
                    <ul>
                        <li>
                            <a href="blog">blog</a>
                        </li>
                        <li>
                            <a href="FAQ's">FAQ's</a>
                        </li>
                        <li>
                            <a href="support">support</a>
                        </li>
                        <li>
                            <a href="a propos de nous">a propos de nous</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4>produit</h4>
                    <ul>
                        <li>
                            <a href="se connecter">se connecter</a>
                        </li>
                        <li>
                            <a href="personnel">personnel</a>
                        </li>
                        <li>
                            <a href="entreprise">entreprise</a>
                        </li>
                        <li>
                            <a href="equipe">equipe</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4>presse</h4>
                    <ul>
                        <li>
                            <a href="logos">logos</a>
                        </li>
                        <li>
                            <a href="evenements">evenements</a>
                        </li>
                        <li>
                            <a href="histoires">histoires</a>
                        </li>
                        <li>
                            <a href="bureau">bureau</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4>légal</h4>
                    <ul>
                        <li>
                            <a href="RGPD">RGPD</a>
                        </li>
                        <li>
                            <a href="politique de confidentialité">politique de confidentialité</a>
                        </li>
                        <li>
                            <a href="condition d'utilisation">condition d'utilisation</a>
                        </li>
                        <li>
                             <a href="vis de non-responsabilité">vis de non-responsabilité</a>   
                        </li>
                    </ul>
                </div>
                <div>
                    <h4>s'inscrire à notre newsletter</h4>
                    <p>
                        nous vous enverrons de bonnes choses à manger sans spam
                    </p>
                    <input type="email" required="required" id="toInput" placeholder="Votre adresse email"/>
                    <input type="submit" class="buttonCustom" id="send" value="s'inscrire"/>
                    <span id="message"></span>
                </div>
                
            </div>
            <div className="flex w-3/4 m-auto my-10 justify-between items-center" id="footerBottom">
                <div className='flex items-center'>
                    <img className='w-[100px]' src={logo} alt="logo"/>
                    <h1>CMRC Inc.</h1>
                </div>
                <div>
                    <img src="" alt=""/>
                    <span>© 2023 CMRC inc. Tous droits réservés</span>
                </div>
                <div className="flex space-x-5">
                    <a href="https://fr-fr.facebook.com/">
                        <img className='w-[30px] bg-black rounded-[50%]' src={fb} alt="icon"/>
                    </a>
                    <a href="https://twitter.com/?lang=fr">
                        <img className='w-[30px] bg-black rounded-[50%]' src={tw} alt="icon"/>
                    </a>
                    <a href="https://www.youtube.com/">
                        <img className='w-[30px] bg-black rounded-[50%]' src={yt} alt="icon"/>
                    </a>
                    
                </div>
            </div>
        
        </>
    )
}