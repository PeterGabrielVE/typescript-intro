//import { name, age } from './bases/01-types';
// import { bulbasaur, pokemons } from './bases/02-objects';
import { charmander } from './bases/03-classes';

import './style.css';



const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
  <h1>Hello ${ charmander.name } con edad de ${ charmander.id }!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`