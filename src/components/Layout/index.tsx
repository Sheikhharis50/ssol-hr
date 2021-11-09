import React from 'react'
import Header from './Header'
import Footer from './Footer'

type Props = {
    
}

const Layout: React.FC<Props> = ({
    children
}) => {
    return (
        <div className="layout">
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layout
