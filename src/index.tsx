import { render } from 'solid-js/web';
import './index.css';
import App from './App';

// Register the service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js').then((registration) => {
    console.log('Service Worker registered:', registration);
  }).catch((error) => {
    console.log('Service Worker registration failed:', error);
  });
}

render(() => <App />, document.getElementById('root') as HTMLElement);
