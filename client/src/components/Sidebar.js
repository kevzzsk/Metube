import React, { Component } from 'react'
import avatar from '../assets/avatar.jpg'

class Sidebar extends Component {
    render() {
        return (
            <div className="wrapper">
                <nav id="sidebar" className={this.props.isOpen === true? "active":"" }>
                    <div className="sidebar-header">
                    </div>

                    <ul className="list-unstyled components">
                        <li className="px-4 py-2">
                            <a href="/"><i className="fas fa-home fa-fw navbar-icon"></i>Home</a>
                        </li>
                        <li className="px-4 pb-2">
                            <a href="/"><i className="fab fa-hotjar fa-fw navbar-icon"></i>Trending</a>
                        </li>
                        <li className="px-4 pb-2">
                            <a href="/"><i className="fas fa-rss fa-fw navbar-icon"></i>Subscriptions</a>
                        </li>
                        <hr />
                        <li className="px-4 py-2">
                            <a href="/"><i className="fas fa-history fa-fw navbar-icon"></i>History</a>
                        </li>
                        <li className="px-4 pb-2">
                            <a href="/"><i className="fas fa-clock fa-fw navbar-icon"></i>Watch Later</a>
                        </li>
                        <hr />
                        <span className="py-2 px-4 text-uppercase">Subscriptions</span>
                        <li className="px-4 py-2">
                            <a href="/"><img src={avatar} alt="img" />PewDiePie</a>
                        </li>
                        <li className="px-4 pb-2">
                            <a href="/"><img src={avatar} alt="img" />Aculite</a>
                        </li>
                        <hr />
                        <li className="px-4 py-2">
                            <a href="/"><i className="fas fa-cog fa-fw navbar-icon"></i>Settings</a>
                        </li>
                        <li className="px-4 pb-2">
                            <a href="/"><i className="fas fa-question-circle fa-fw navbar-icon"></i>About</a>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Sidebar;