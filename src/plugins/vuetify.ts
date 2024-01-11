import { createVuetify } from 'vuetify';
import '@mdi/font/css/materialdesignicons.css';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
//Data tables
import { VDataTable } from 'vuetify/labs/VDataTable';

//DragScroll
import { VueDraggableNext } from 'vue-draggable-next';

// import { BLUE_THEME} from '@/theme/LightTheme';
import { BLUE_THEME, RED_THEME, PURPLE_THEME, GREEN_THEME, INDIGO_THEME, ORANGE_THEME } from '@/theme/LightTheme';
import {
    DARK_BLUE_THEME,
    DARK_RED_THEME,
    DARK_ORANGE_THEME,
    DARK_PURPLE_THEME,
    DARK_GREEN_THEME,
    DARK_INDIGO_THEME
} from '@/theme/DarkTheme';

export default createVuetify({
    components: {
        VDataTable,
        draggable: VueDraggableNext
    },
    directives,

    theme: {
        defaultTheme: 'ORANGE_THEME',
        themes: {
            BLUE_THEME,
            RED_THEME,
            PURPLE_THEME,
            GREEN_THEME,
            INDIGO_THEME,
            ORANGE_THEME,
            DARK_BLUE_THEME,
            DARK_RED_THEME,
            DARK_ORANGE_THEME,
            DARK_PURPLE_THEME,
            DARK_GREEN_THEME,
            DARK_INDIGO_THEME
        }
    },
    defaults: {
        VCard: {
            rounded: 'md'
        },
        VTextField: {
            variant: 'outlined',
            density: 'comfortable',
            color: 'primary'
        },
        VTextarea: {
            variant: 'outlined',
            density: 'comfortable',
            color: 'primary'
        },
        VSelect: {
            variant: 'outlined',
            density: 'comfortable',
            color: 'primary'
        },
        VListItem: {
            minHeight: '45px'
        },
        VTooltip: {
            location: 'top'
        }
    }
});