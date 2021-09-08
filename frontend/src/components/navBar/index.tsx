import ImgDsDark from "assets/img/ds-dark.svg"

const Navbar = () => {
    return (
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-dark border-bottom shadow-sm">
            <div className="container">
                <nav className="my-2 my-md-0 mr-md-3">
                    <img src={ImgDsDark} alt="DevSuperior" width="120" />
                </nav>

            </div>

            <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Procure por linguagem" aria-label="Search" />
                <button className="btn btn-outline-success button" type="submit">Procure</button>
            </form>
        </div >
    );
}

export default Navbar;
