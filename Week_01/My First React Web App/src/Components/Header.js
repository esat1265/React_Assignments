const Header = () =>{
    return (
       <nav className="navbar navbar-dark bg-primary">
          <div className="container-fluid">
            <a className="navbar-brand" href="www.hicoder.ch">LOGO</a>
            <div className="navbar navbar-brand">
              <a className="nav-link active navbar-brand" aria-current="page" href="www.hicoder.ch">Home</a>
              <a className="nav-link navbar-brand" href="www.hicoder.ch">About</a>
              <a className="nav-link navbar-brand" href="www.hicoder.ch">Contact</a>
            </div>    
          </div>
       </nav>
    )
};

export default Header;