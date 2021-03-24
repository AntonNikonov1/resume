import React from 'react'
import { Tag } from '../HtmlTag/Tag'

export const Header = () => {
    return (
        <header className="header">
            <nav className="header__nav">
                <p className="header__nav-logo">
                    <Tag>Resume</Tag>
                </p>

                <ul className="header__nav-list">
                    <li className="header__nav-item">
                        <Tag>Welcom</Tag>
                    </li>
                    <li className="header__nav-item">
                        <Tag>AboutMe</Tag>
                    </li>
                    <li className="header__nav-item">
                        <Tag>Skills</Tag>
                    </li>
                    <li className="header__nav-item">
                        <Tag>Contact</Tag>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

