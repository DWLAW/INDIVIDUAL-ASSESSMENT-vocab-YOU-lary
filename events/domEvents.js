import { deleteVocab, getSingleVocab, getVocab } from '../api/vocabData';
import addVocabForm from '../pages/addVocabForm';
import { showVocab } from '../pages/vocab';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    //  CLICK EVENT FOR DELETING A vocab
    if (e.target.id.includes('delete-vocab')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        console.warn('CLICKED DELETE vocab', e.target.id);
        const [, firebaseKey] = e.target.id.split('--');

        deleteVocab(firebaseKey).then(() => {
          getVocab(user).then(showVocab);
        });
      }
    }
    // create vocab click event
    if (e.target.id.includes('add-vocab-btn')) {
      addVocabForm();
    }
    // CLICK EVENT EDITING/UPDATING A VOCAB WORD
    if (e.target.id.includes('edit-vocab-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleVocab(firebaseKey).then((vocabObj) => addVocabForm(vocabObj));
    }
  });
};

export default domEvents;
