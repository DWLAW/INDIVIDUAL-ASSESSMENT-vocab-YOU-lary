import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';
import selectCategory from './selectCategory';

const addVocabForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-Vocab--${obj.firebaseKey}` : 'submit-Vocab'} class="mb-4">
      <div class="form-group">
        <label for="image">Title</label>
        <input type="text" class="form-control" id="title" placeholder="Title" value="${obj.title || ''}" required>
      </div>
      <div class="form-group">
        <label for="image">definition</label>
        <input type="text" class="form-control" id="definition" placeholder="definition"value="${obj.definition || ''}" required>
      </div>
        </div>
        <div class="form-group" id="select-category">
        </div>

      <button type="submit" class="btn btn-primary mt-3">Submit Vocab</button>
    </form>`;

  renderToDOM('#form-container', domString);
  selectCategory(`${obj.category || ''}`);
};
export default addVocabForm;
