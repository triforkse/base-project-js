const PRODUCTION_URL = 'REPLACEMEURL';
const DEVELOPMENT_URL = 'localhost:3000';

window.onkeydown = (e) => {
  if (e.ctrlKey && e.keyCode === 68) {
    console.log('Setting environment to dev'); // eslint-disable-line no-console
    localStorage.setItem('__app_env', 'dev');
  }
};

export function isProduction() {
  return localStorage.getItem('__app_env') !== 'dev';
}

export function isDevelopment() {
  return !isProduction();
}

export function apiAddress() {
  return isProduction() ? PRODUCTION_URL : DEVELOPMENT_URL;
}

export function url(path) {
  return apiAddress() + '/' + path;
}
