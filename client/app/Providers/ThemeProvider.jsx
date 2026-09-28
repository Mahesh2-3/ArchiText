'use client'
import { ThemeProvider } from 'next-themes'

// Context provider component for managing light and dark themes
const ThemeProviderClient = ({ children }) => {
    return (
        <ThemeProvider defaultTheme='system' attribute="class" enableSystem>
            {children}
        </ThemeProvider>
    )
}

export default ThemeProviderClient
