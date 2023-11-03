import React from 'react'

const Header = ({ title }) => {
    // parameters: props

    return (
        <header>
            <h1>{title}</h1>
        </header>
    )
}

Header.defaultProps = {
    title: "Default Title"
}

export default Header