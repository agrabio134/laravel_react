import React, {useEffect} from 'react';
import { Link, useLocation } from "react-router-dom";
 
function Header() {
    const location = useLocation();
    const pageLinks = [
        {
            "name": "Home",
            "url" :"/",
        },
        {
            "name": "Blog",
            "url" :"/blog",
        },
        {
            "name": "About",
            "url" :"/about",
        },
        {
            "name": "Contact",
            "url" :"/contact",
        },
 
    ];
 
    useEffect(() => {
        pageLinks.map((page)=>{
            if(page.url == location.pathname) {
                document.title = page.name;
            }
        });
    }, [])
 
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">TestPage</Link>
             
                <ul className="navbar-nav mr-auto">
                    {
                        pageLinks.map((page, key) => {
                            return (
                                <li key={key} className={`nav-item ${location.pathname == page.url ? 'active' : ''}`}>
                                    <Link to={page.url} className="nav-link">{page.name}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
        </nav>
    );
}
  
export default Header;

