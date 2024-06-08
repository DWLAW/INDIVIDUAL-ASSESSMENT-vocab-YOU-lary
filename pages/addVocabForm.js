import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const addVocabForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-vocab--${obj.firebaseKey}` : 'submit-Vocab'}" class="mb-4">
      <div class="form-group">
        <label for="image">Title</label>
        <input type="text" class="form-control" id="title" placeholder="Title" value="${obj.title || ''}" required>
      </div>
      <div class="form-group">
        <label for="image">definition</label>
        <input type="text" class="form-control" id="definition" placeholder="definition"value="${obj.definition || ''}" required>
      </div>
      <div class="form-group">
        <label for="image">hiragana</label>
        <input type="text" class="form-control" id="hiragana" placeholder="hiragana"value="${obj.hiragana || ''}" required>
      </div>
      <div class="form-group">
        <label for="category">category</label>
        <select id="category" class="form-control">
          <option selected>Choose...</option>
          <option>noun</option>
          <option>verb</option>
          <option>adverb</option>
          <option>adjective</option>
        </select>
    </div>

      <button type="submit" class="btn btn-primary mt-3">Submit Vocab</button>
    </form>`;

  renderToDOM('#form-container', domString);
};
export default addVocabForm;
