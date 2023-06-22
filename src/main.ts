import { name, age } from './bases/01-types';


import './style.css';



const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
  <h1>Hello ${ name } con edad de ${ age }!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`