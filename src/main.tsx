import './index.css';

// React mount only if explicitly targeted
const rootEl = document.getElementById('root');
if (rootEl && rootEl.dataset.reactMount === 'true') {
  import('react-dom/client').then(({createRoot}) => {
    import('./App.tsx').then(({default: App}) => {
      createRoot(rootEl).render(<App />);
    });
  });
}

