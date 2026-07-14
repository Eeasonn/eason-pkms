import DefaultTheme from 'vitepress/theme'
import './style.css'
import Catalog from './components/Catalog.vue'
import DeleteButton from './components/DeleteButton.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('Catalog', Catalog)
    app.component('DeleteButton', DeleteButton)
  },
}