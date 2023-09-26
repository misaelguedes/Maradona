import './Header.css'

import capa from '../../images/capa.jpg'

export default function Header() {
    return (
        <header>
            <img className='imgHeader' src={capa} alt='capa'/>
        </header>
    )
}