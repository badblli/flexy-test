export type ConfigProps = {
    Sidebar_drawer: any;
    Customizer_drawer: boolean;
    mini_sidebar: boolean;
    setHorizontalLayout: boolean;
    actTheme: string;
    inputBg: string;
    boxed: boolean;
    setBorderCard: boolean;
};

const config: ConfigProps = {
    // DEFAULT THEME
    // Sidebar_drawer: null,
    // Customizer_drawer: false,
    // mini_sidebar: false,
    // setHorizontalLayout: false, // Horizontal layout
    // actTheme: 'ORANGE_THEME',
    // inputBg: 'ORANGE_THEME',
    // boxed: true,
    // setBorderCard: false
    // DEFAULT THEME

    // CUSTOM THEME
    Sidebar_drawer: true,
    Customizer_drawer: true,
    mini_sidebar: false,
    setHorizontalLayout: false, // Horizontal layout
    actTheme: 'DARK_ORANGE_THEME',
    inputBg: 'ORANGE_THEME',
    boxed: false,
    setBorderCard: false
};

export default config;
