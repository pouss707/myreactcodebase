import React from 'react'
import { useEffect, useRef } from 'react';

function Header() {
    const headerRef = useRef(null);
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "&") {

                headerRef.current.scrollIntoView({ behavior: "smooth" });
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);
    return (
        <>
            <section>
                <span className='span'>Hello World!</span>
            </section>
            <header ref={headerRef} className="header">
                <h1 >MyReactCodeBase</h1>
                <nav className="nav">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header