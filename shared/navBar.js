import renderToDOM from '../utils/renderToDom';

const navBar = () => {
  const domString = `
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark mb-5">
    <div class="container-fluid">
      <a class="navbar-brand title" href="#">Vocab-YOU-lary</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item active">
          <a class="nav-link" href="#" id="all-vocab">
            All Vocab <span class="sr-only">(current)</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" id="nouns">Nouns</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" id="verbs">Verbs</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" id="adverbs">Adverbs</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" id="adjectives">Adjectives</a>
        </li>
        </ul>
        
        <span class="navbar-text">
          <div id="logout-button"></div>
        </span>
        </div>
        </div>
      </nav>`;
  renderToDOM('#navigation', domString);
};

export default navBar;
