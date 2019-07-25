import React, { Component } from 'react'
import avatar from '../assets/avatar.jpg'

class Sidebar extends Component {
    render() {
        return (
            <>
                <nav id="sidebar" className={this.props.isOpen === true? "":"active" }>
                    <div className="sidebar-header">
                    </div>

                    <ul className="list-unstyled components">
                        <li>
                            <a href="/"><i className="fas fa-home fa-fw navbar-icon"></i>Home</a>
                        </li>
                        <li>
                            <a href="/"><i className="fab fa-hotjar fa-fw navbar-icon"></i>Trending</a>
                        </li>
                        <li>
                            <a href="/"><i className="fas fa-rss fa-fw navbar-icon"></i>Subscriptions</a>
                        </li>
                        <hr />
                        <li>
                            <a href="/"><i className="fas fa-history fa-fw navbar-icon"></i>History</a>
                        </li>
                        <li>
                            <a href="/"><i className="fas fa-clock fa-fw navbar-icon"></i>Watch Later</a>
                        </li>
                        <hr />
                        <div className="sidebar-sub">
                        <span className="py-2 px-4 text-uppercase">Subscriptions</span>
                        <li>
                            <a href="/"><img src={avatar} alt="img" />PewDiePie</a>
                        </li>
                        <li>
                            <a href="/"><img src={avatar} alt="img" />Aculite</a>
                        </li>
                        <hr />
                        </div>
                        <li>
                            <a href="/"><i className="fas fa-cog fa-fw navbar-icon"></i>Settings</a>
                        </li>
                        <li>
                            <a href="/"><i className="fas fa-question-circle fa-fw navbar-icon"></i>About</a>
                        </li>
                    </ul>
                </nav>
            </>
        )
    }
}

export default Sidebar;