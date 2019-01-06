import React, { Component } from 'react';
import M from "materialize-css/dist/js/materialize.min.js";

class Header extends Component {

    componentDidMount() {
        var elem = document.querySelector(".sidenav");
        var instance = M.Sidenav.init(elem, {
            edge: "left",
            inDuration: 250
        });
    }
    render() {
        let customStyle = {
            paddingRight: '10px',
            paddingLeft: '10px',
        }
        return (
            <nav>
                <div className="nav-wrapper red darken">
                    <a href="#" className="brand-logo" style={customStyle}>
                         WPReader
                    </a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="sass.html">Sass</a></li>
                        <li><a href="badges.html">Components</a></li>
                        <li><a href="collapsible.html">Javascript</a></li>
                        <li><a href="mobile.html">Mobile</a></li>
                    </ul>
                </div>
                <ul className="sidenav" id="mobile-demo">
                    <li><a href="sass.html">Sass</a></li>
                    <li><a href="badges.html">Components</a></li>
                    <li><a href="collapsible.html">Javascript</a></li>
                    <li><a href="mobile.html">Mobile</a></li>
                </ul>
            </nav>

        );
    }
}

export default Header;

{/* <nav>
                <div className="nav-wrapper red darken">
                    <a href="#" className="brand-logo">Categorizr</a>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><a href="sass.html">About</a></li>
                        <li><a href="badges.html">Terms & Conditions</a></li>
                    </ul>
                </div>
            </nav> */}