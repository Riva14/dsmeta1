
import logo from "../../assets/img/logo.svg"
import './styles.css'

function Header() {
    return (
        <>
            <header>
                <div className="centro-logo">
                    <img src={logo} alt="Roberto Sistemas" />
                    <h1>Roberto Sistemas</h1>
                    <p>Desenvolvido por
                        <a href="https://www.instagram.com/robertorrp14011972/">@Roberto Sistemas</a>
                    </p>
                    <h1>Fazendo o melhor pra Você !!!</h1>

                </div>
            </header>
        </>
    )
}

export default Header

