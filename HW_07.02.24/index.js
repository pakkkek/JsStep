const appElement = document.getElementById('app');
const pokemonListElement = document.getElementById('pokemon-list');
const pokemonDetailsElement = document.getElementById('pokemon-details');
const paginationElement = document.getElementById('pagination');

const apiUrl = 'https://pokeapi.co/api/v2/pokemon';
const limit = 10;
let offset = 0;

function fetchPokemons() {
  fetch(`${apiUrl}?limit=${limit}&offset=${offset}`)
    .then((response) => response.json())
    .then((data) => {
      displayPokemons(data.results);
      displayPagination(data.count);
    })
    .catch((error) => console.error('Error fetching Pokémon:', error));
}

function fetchPokemonDetails(pokemonUrl) {
  fetch(pokemonUrl)
    .then((response) => response.json())
    .then((data) => displayPokemonDetails(data))
    .catch((error) => console.error('Error fetching Pokémon details:', error));
}

function displayPokemons(pokemons) {
  pokemonListElement.innerHTML = '';
  pokemons.forEach((pokemon) => {
    const pokemonElement = document.createElement('div');
    pokemonElement.classList.add('pokemon');
    pokemonElement.textContent = pokemon.name;
    pokemonElement.addEventListener('click', () =>
      fetchPokemonDetails(pokemon.url)
    );
    pokemonListElement.appendChild(pokemonElement);
  });
}

function displayPagination(totalPokemons) {
  const totalPages = Math.ceil(totalPokemons / limit);
  paginationElement.innerHTML = '';

  for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement('button');
    button.textContent = i;
    button.addEventListener('click', () => handlePaginationClick(i));
    paginationElement.appendChild(button);
  }
}

function handlePaginationClick(page) {
  offset = (page - 1) * limit;
  fetchPokemons();
}

function displayPokemonDetails(pokemon) {
  pokemonDetailsElement.innerHTML = `
        <div class="pokemon-details">
            <h2>${pokemon.name}</h2>
            <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" />
            <p>Height: ${pokemon.height}</p>
            <p>Weight: ${pokemon.weight}</p>
        </div>
    `;
}

fetchPokemons();
