// ** React Imports
import React from 'react' 

import { Suspense, lazy } from 'react' // Suspense y lazy para carga perezosa
import { createRoot } from 'react-dom/client' // Método para crear el root de React 18
import { BrowserRouter } from 'react-router-dom' // Enrutador para manejar rutas en la aplicación

// ** Redux Imports
import { store } from './redux/store' // Importar la configuración de la tienda Redux
import { Provider } from 'react-redux' // Proveedor de Redux para envolver la aplicación

// ** ThemeColors Context
import { ThemeContext } from './utility/context/ThemeColors' // Contexto de colores temáticos

// ** ThemeConfig
import themeConfig from './configs/themeConfig' // Configuración del tema de la aplicación

// ** Toast
import { Toaster } from 'react-hot-toast' // Notificaciones tipo toast

// ** Spinner (Splash Screen)
import Spinner from './@core/components/spinner/Fallback-spinner' // Componente de Spinner para mostrar mientras la app carga

// ** Ripple Button
import './@core/components/ripple-button' // Efecto ripple para botones (opcional, según tu configuración)

// ** PrismJS
import 'prismjs' // Biblioteca para resaltar sintaxis en el código
import 'prismjs/themes/prism-tomorrow.css' // Tema de PrismJS
import 'prismjs/components/prism-jsx.min' // Soporte para JSX en PrismJS

// ** React Perfect Scrollbar
import 'react-perfect-scrollbar/dist/css/styles.css' // Estilos para React Perfect Scrollbar

// ** React Hot Toast Styles
import '@styles/react/libs/react-hot-toasts/react-hot-toasts.scss' // Estilos personalizados para React Hot Toast

// ** Core styles
import './@core/assets/fonts/feather/iconfont.css' // Iconos de Feather
import './@core/scss/core.scss' // Estilos principales de la aplicación
import './assets/scss/style.scss' // Estilos personalizados



// ** Lazy load app
const LazyApp = lazy(() => import('./App')) // Carga perezosa de la aplicación principal

// ** Crear el contenedor raíz
const container = document.getElementById('root')
const root = createRoot(container) // Método de React 18 para crear el root

// ** Renderizar la aplicación
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Suspense fallback={<Spinner />}>
        <ThemeContext>
          <LazyApp />
          <Toaster position={themeConfig.layout.toastPosition} toastOptions={{ className: 'react-hot-toast' }} />
        </ThemeContext>
      </Suspense>
    </Provider>
  </BrowserRouter>
);

