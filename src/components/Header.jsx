const Header = () => {

    // * Enter your name and role here.
    const NAME = "meth";
    const ROLE = "software engineering student";

    return (
            <div className="header-container">
                <header className="header">

                    <span className="hover-label">
                        ← hover over 
                    </span>
                    
                    <h1 className='header-introduction'>hi, i'm{" "} <span className="name">{NAME}</span>!</h1>
                    <p className='headline'>{ROLE}</p>
                </header>
            </div>
    )
    
}

export default Header;