const defaultOptions = {
    defaultColor: '#111'
}

const siteSettingsPlugin =  {
    install(Vue, opts) {

        const options = { ...defaultOptions, ...opts }

        /**
         * 
         * @param { String } cssVariable CSS Variable to change
         * @param { String } color Set color of css variable, defaults to #111111
         * 
         */
        Vue.prototype.$setTheme = function(cssVariable, color = options.defaultColor) {
            if (typeof cssVariable !== 'string' || typeof color !== 'string') {
                throw new Error('An error occured. ThemeColor plugin could not set CSS variable theme color.')
            }
            const root = document.documentElement;
            root.style.setProperty(cssVariable, color)
        }
        /**
         * 
         * @param { String } title Set page/route title 
         */
        Vue.prototype.$setPageTitle = function(title) {
            typeof title === 'string' ? document.title = `Tyler Mitchell — ${ title }` : console.error('Error: title is not a string')
        }

    }
}

export default siteSettingsPlugin;