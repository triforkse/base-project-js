const PRODUCTION_URL = 'app.trifork.com';
const DEVELOPMENT_URL = 'localhost:3000';

window.setEnvironment = (env) => window.localStorage.setItem('env', env);
window.setEnvironment('prod');

window.onkeydown = (event) => {
  if(event.altKey && event.ctrlKey && event.keyCode === 68) {
    console.log("Setting environment to dev");
    window.setEnvironment('dev');
  }
};

export default window.localStorage.getItem('env') === 'prod' ? PRODUCTION_URL : DEVELOPMENT_URL;
