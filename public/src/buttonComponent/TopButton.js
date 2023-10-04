import React, { useEffect, useState } from 'react'
import btn from '../scss/topbutton.module.css'

function TopButton(props) {
    const [scrolltopBtn, setScrolltopBtn] = useState(true);

    const handleScroll = () => {
        const { scrollY } = window;

        scrollY > 50 ? setScrolltopBtn(true) : setScrolltopBtn(false)
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    const goToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };



    return (
        <div id={props.id}>
            <a href='#top' className={`nav-link topButton`}>
                <svg viewBox="0 0 56 56" className={`topButtonsvg ${btn.topButtonsvg}`}>
                    <g fill="none" fill-rule="evenodd">
                        <circle stroke-opacity=".05" stroke="#000" fill="#FFF" cx="28" cy="28" r="27.5" />
                        <path d="M28.59 19.852a.833.833 0 0 0-1.18 0l-4.713 4.714a.833.833 0 1 0 1.178 1.178l3.352-3.35-.001 13.106a.833.833 0 0 0 1.667 0V22.512l3.232 3.232a.833.833 0 0 0 1.178-1.178l-4.714-4.714z" fill="#000" />
                    </g>
                </svg>
            </a>
        </div>
    )
}

export default TopButton
