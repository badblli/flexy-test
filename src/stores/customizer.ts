import { defineStore } from 'pinia';
import config from '@/config';
import AuthAdmin from '@/utils/helpers/pathConfig';
import envConfig from '@/utils/config';
import { callPostApi, parse } from '@/utils/helpers/globalHelper';

export const useCustomizerStore = defineStore({
    id: 'customizer',
    state: () => ({
        Sidebar_drawer: config.Sidebar_drawer,
        Customizer_drawer: config.Customizer_drawer,
        mini_sidebar: config.mini_sidebar,
        setHorizontalLayout: config.setHorizontalLayout, // Horizontal layout
        actTheme: config.actTheme,
        inputBg: config.inputBg,
        boxed: config.boxed,
        setBorderCard: config.setBorderCard,
        name: 'UpdateDarkMode',
        controllerName: 'Admin',
        applicationName: AuthAdmin.AuthAdmin,
        isDarkMode: config.actTheme === 'DARK_ORANGE_THEME' ? true : false
    }),

    getters: {},
    actions: {
        SET_SIDEBAR_DRAWER() {
            this.Sidebar_drawer = !this.Sidebar_drawer;
        },
        SET_MINI_SIDEBAR(payload: any) {
            this.mini_sidebar = payload;
        },
        SET_CUSTOMIZER_DRAWER(payload: any) {
            this.Customizer_drawer = payload;
        },

        SET_LAYOUT(payload: any) {
            this.setHorizontalLayout = payload;
        },
        SET_THEME(payload: any) {
            this.actTheme = payload;
            this.SET_THEME_SERVICES();
        },
        SET_THEME_SERVICES() {
            try {
                let params = {
                    isDarkMode: this.isDarkMode
                };

                callPostApi(this.applicationName, this.controllerName, this.name, params, [], true)
                    .then((response) => {
                        if (response && response.data && response.data.status === 1) {
                            const theme = parse(response.data.result);
                            // Handle the theme if needed
                        }
                    })
                    .catch((error) => {
                        // Handle error if needed
                        console.log(error);
                    });
            } catch (error) {
                // Handle error if needed
                console.log(error);
            }
        },

        SET_CARD_BORDER(payload: any) {
            this.setBorderCard = payload;
        }
    }
});
