export default {
    useCustomProperties: true,
    initialColorMode: "light",
    colors: {
        text: '#000',
        background: '#fff',
        primary: '#07c',
        secondary: '#05a',
        muted: '#f6f6f6',
        modes: {
            dark: {
                text: '#fff',
                background: '#121212',
                primary: '#243b53',
                secondary: '#09c',
                muted: '#111',
            },
            deep: {
                text: '#fff',
                background: '#222639',
                primary: '#BB99FF',
                secondary: '#EE99FF',
                muted: '#000',
            }
        }
    },
    fonts: {
        body: "system-ui, sans-serif",
        heading: "system-ui, sans-serif",
        monospace: "Menlo, monospace",
    },
    fontWeights: {
        body: 100,
        heading: 700,
        bold: 700,
    },
    lineHeights: {
        body: 1.5,
        heading: 1.125,
    },
    fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
    space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
    styles: {
        a: {
            color: "text"
        }
    }
}