export default defineI18nConfig(() => ({
    legacy: false,
    locales: [
        { code: "es", name: "Español" },
        { code: "en", name: "English" }
    ],
    messages: {
        es: {
            welcome: 'Bienvenido'
        },
        en: {
            welcome: 'Welcome'
        },

    }
}))