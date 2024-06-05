import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyVocab = () => {
  const domString = '<h1>No Vocab</h1>';
  renderToDOM('#store', domString);
};
const showVocab = (array) => {
  clearDom();

  const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-vocab-btn">Add Vocab</button>';
  renderToDOM('#add-button', btnString);

  let domString = '';
  array.forEach((item) => {
    domString += `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${item.title} </h5>
      <hr>
      <h6 class="card-subtitle mb-2 text-muted">${item.definition}</h6>
      
      <p class="card-text bold">${item.category}</p>
      <i class="fas fa-edit btn btn-info" id="update-vocab--${item.firebaseKey}"></i>
      <i class="btn btn-danger fas fa-trash-alt" id="delete-vocab-btn--${item.firebaseKey}"></i>
    </div>
  </div>
  `;
  });
  renderToDOM('#vocabCards', domString);
};

export { emptyVocab, showVocab };
