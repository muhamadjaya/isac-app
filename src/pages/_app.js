import '@/assets/style/app.css'
import 'nprogress/nprogress.css'
import 'tailwindcss/tailwind.css'
import 'react-toastify/dist/ReactToastify.css';
import NProgress from 'nprogress'
import Router from 'next/router'

//Binding events loading progress
Router.events.on('routeChangeStart',() => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const App = ({ Component, pageProps }) => <Component {...pageProps} />

export default App
