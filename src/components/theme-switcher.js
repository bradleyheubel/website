/** @jsx jsx */
import { jsx, useColorMode, Button } from "theme-ui"

const ThemeSwitcher = () => {
    const [colorMode, setColorMode] = useColorMode()
    const nextColorMode = colorMode === "default" ? "dark" : "default"

    return (
        <Button
            sx={{
                cursor: "pointer"
            }}
            onClick={() => setColorMode(nextColorMode)}    
        >
            Toggle color
        </Button>
    )
}

export default ThemeSwitcher