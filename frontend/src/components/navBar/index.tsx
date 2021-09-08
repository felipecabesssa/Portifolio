import ImgDsDark from "assets/img/ds-dark.svg"

const Navbar = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Projetos</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <img src={ImgDsDark} alt="DevSuperior" width="120" className="nav-link active" aria-current="page" href="#" /></img>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">formações</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Cursos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled">Experiencias profissionais</a>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2 button" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success button" type ="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>

    );
}

export default Navbar;
