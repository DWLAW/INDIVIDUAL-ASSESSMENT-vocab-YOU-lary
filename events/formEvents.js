import {
  createVocab, getVocab, updateVocab
} from '../api/vocabData';
import { showVocab } from '../pages/vocab';

const formEvents = (user) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('submit')) {
      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        hiragana: document.querySelector('#hiragana').value,
        category: document.querySelector('#category').value,
        uid: user.uid
      };
      createVocab(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateVocab(patchPayload).then(() => {
          getVocab(user.uid).then((vocab) => showVocab(vocab));
        });
      });
    }
    //  CLICK EVENT FOR EDITING A Vocab
    if (e.target.id.includes('update-vocab')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        hiragana: document.querySelector('#hiragana').value,
        category: document.querySelector('#category').value,
        firebaseKey,
      };

      updateVocab(payload).then(() => {
        getVocab(user.uid).then((vocab) => showVocab(vocab));
      });
    }
  });
};
export default formEvents;
