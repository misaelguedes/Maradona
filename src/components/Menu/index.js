import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'

import './Menu.css'

export default function Menu() {

    const [itensVisible, setItensVisible] = useState(false)

    useEffect(() => {
        function mudouTamanho() {
            setItensVisible(window.innerWidth >= 646)
        }

        window.addEventListener('resize', mudouTamanho);

        mudouTamanho();

        return () => {
            window.removeEventListener('resize', mudouTamanho);
          };
    }, [])
    
    function clickMenu() {
        setItensVisible(!itensVisible)
    }

    function hideMenu() {
        if (window.innerWidth <= 646) {
            setItensVisible(false)
        }
    }

    return (
        <div>
            <span id="burguer" class="material-symbols-outlined" onClick={clickMenu}>menu</span>
            <menu id='itens' style={{ display: itensVisible ? 'block' : 'none' }}>
            <Link onClick={hideMenu} to='/'>Home</Link>
            <Link onClick={hideMenu} to='/historia'>História</Link>
            <Link onClick={hideMenu} to='/titulos'>Títulos</Link>
            <Link onClick={hideMenu} to='/estatisticas'>Estatísticas</Link>
            <Link onClick={hideMenu} to='/videos'>Vídeos</Link>
            </menu>
        </div>
    )
}