/** @jsx jsx */
import { jsx, useColorMode, Button } from "theme-ui"

const colorModes = [
    'default',
    'dark',
    'deep',
]

const ThemeSwitcher = () => {
    const [colorMode, setColorMode] = useColorMode()

    return (
        <Button
            sx={{
                cursor: "pointer"
            }}
            onClick={e => {
                const indexColorMode = colorModes.indexOf(colorMode)
                const nextColorMode = colorModes[(indexColorMode + 1) % colorModes.length]
                setColorMode(nextColorMode)
            }}    
        >
            {colorMode.charAt(0).toUpperCase() + colorMode.slice(1)}
        </Button>
    )
}

export default ThemeSwitcher