import React from 'react'
import ThemeSwitch from './theme-switch'
import WhatsappButton from './whatsapp-button'
const FloatingButtons = () => {
    return (
        <div className="fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col items-center space-y-4 z-50">
            <ThemeSwitch />
            <WhatsappButton />
        </div>
    )
}

export default FloatingButtons