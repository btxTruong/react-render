import ReactDOM from 'react-dom/client'
import {
  activate as activateBackend,
  initialize as initializeBackend,
} from 'react-devtools-inline/backend';
import { initialize as createDevTools } from 'react-devtools-inline/frontend';

const isDev = import.meta.env.DEV;

const APP_SOURCE = isDev ? '/src/main.tsx' : `main.${import.meta.env.VITE_COMMIT_HASH}.js`;

function hookNamesModuleLoaderFunction() {
  return import('react-devtools-inline/hookNames');
}

/*
 * This is a workaround to inject the refresh runtime into the iframe
 *
 * https://github.com/vitejs/vite/issues/1984
 */
function injectRefreshRunTime(contentWindow: Document) {
  const script = contentWindow.createElement('script');
  script.type = 'module';
  script.innerHTML = `
    import RefreshRuntime from "/@react-refresh"
    
    RefreshRuntime.injectIntoGlobalHook(window)
    
    window.$RefreshReg$ = () => {}
    window.$RefreshSig$ = () => (type) => type
    window.__vite_plugin_react_preamble_installed__ = true
`;
  contentWindow.body.appendChild(script);
}

function injectAppScript(
  contentDocument: Document,
  sourcePath: string,
  callback: () => void
) {
  const script = contentDocument?.createElement('script');
  script.onload = callback;
  script.src = sourcePath;
  script.type = 'module';

  contentDocument.body.appendChild(script);

  const cssLink = contentDocument.createElement('link');
  cssLink.rel = 'stylesheet';
  cssLink.href = isDev ? 'main.css' : `/react-render/main.${import.meta.env.VITE_COMMIT_HASH}.css`;
  contentDocument.head.appendChild(cssLink);

  isDev && injectRefreshRunTime(contentDocument);
}

function init(appIframe: HTMLIFrameElement, devtoolsContainer: HTMLElement, appSource: string) {
  const { contentDocument, contentWindow } = appIframe;

  initializeBackend(contentWindow);

  const DevTools = createDevTools(contentWindow);

  injectAppScript(contentDocument as Document, appSource, () => {
    ReactDOM.createRoot(devtoolsContainer).render(
      <DevTools
        hookNamesModuleLoaderFunction={hookNamesModuleLoaderFunction}
        showTabBar={true}
      />,
    );
  });

  activateBackend(contentWindow);
}

const iframe = document.createElement('iframe');
iframe.frameBorder = '0';
iframe.id = 'app';
const devtoolsContainer = document.getElementById('devtools') as HTMLElement;
document.body.appendChild(iframe);

// TODO: need to find the way to get file name from vite
init(iframe, devtoolsContainer, APP_SOURCE);
