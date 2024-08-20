import logoFCC from './assets/freecodecamp-logo.png'

function Logo(){
    return(
        <a href="http://freecodecamp.org" target="_blank">
        <img src={logoFCC} alt="Logo de FCC" className='logo'/>
        </a>
    );
}

export { Logo }