

export default function NavBar(){

    return(
        <nav>
            <div className="logo">
            <img src="../images/pepper.png" height="150px"/>
            <h2>Cayenne Catering</h2>
            </div>
            
        <ul>
            <li><a href="../index.html">Home</a></li>
            <li><a href="../pages/about.html">About</a></li>
            <li><a href="../pages/contact.html">Contact</a></li>
        </ul>
    </nav>
    )
}