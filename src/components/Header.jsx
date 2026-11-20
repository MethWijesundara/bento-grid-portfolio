const Header = () => {

    // * Enter your name and role here.
    const NAME = "Meth";
    const ROLE = "Software engineering student & developer";

    return (
            <div className="header-container">
                <header className="header">

                    {/* <span className="hover-label">
                        ← hover over | tap 
                    </span> */}
                    
                    <h1 className='header-introduction'>Welcome to <span className="name"> {NAME}'s laboratory</span> !</h1>
                    {/* <p className='headline'></p> */}
                </header>
            </div>
    )
    
}

export default Header;