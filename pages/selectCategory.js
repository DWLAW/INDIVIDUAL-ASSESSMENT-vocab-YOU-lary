import { getVocab } from '../api/vocabData';
import renderToDOM from '../utils/renderToDom';

const selectCategory = (vocabId) => {
  let domString = `<label for="vocab">Select a category</label>
    <select class="form-control" id="vocab_id" required>
    <option value="">Select an vocab</option>`;

  getVocab().then((vocabsArray) => {
    vocabsArray.forEach((vocab) => {
      domString += `
          <option 
            value="${vocab.firebaseKey}" 
            ${vocabId === vocab.firebaseKey ? 'selected' : ''}>
              ${vocab.category}
          </option>`;
    });

    domString += '</select>';

    renderToDOM('#select-category', domString);
  });
};

export default selectCategory;
