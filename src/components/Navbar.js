// import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Navbar = () => {

    return (
        // <nav className="navbar navbar-expand-lg ">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="#">
                    MarkNews
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item"><Link className="nav-link" to="/business">business</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/entertainment">entertainment</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/health">health</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/science">science</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/sports">sports</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/technology">technology</Link></li>





                        <li className="nav-item">
                            <button onClick={() => this.setState({ className: "navbar navbar-expand-lg navbar-dark bg-dark" })} className="btn btn-dark">Toggle</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >

    )
}


export default Navbar