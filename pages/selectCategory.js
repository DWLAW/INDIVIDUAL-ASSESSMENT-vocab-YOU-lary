import { getVocab } from '../api/vocabData';
import renderToDOM from '../utils/renderToDom';

const selectCategory = (vocabId) => {
  let domString = `<label for="vocab">Select a category</label>
    <select class="form-control" id="vocab_id" required>
    <option value="">Select a category</option>`;

  getVocab().then((vocabsArray) => {
    vocabsArray.forEach((category) => {
      domString += `
          <option 
            value="${category.firebaseKey}" 
            ${vocabId === category.firebaseKey ? 'selected' : ''}>
              ${category.category}
          </option>`;
    });

    domString += '</select>';

    renderToDOM('#select-category', domString);
  });
};

export default selectCategory;
