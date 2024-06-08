import {
  filterAdj, filterAdverb, filterNoun, filterVerb, getVocab
} from '../api/vocabData';
import { showVocab } from '../pages/vocab';

const navigationEvents = (user) => {
  document.querySelector('#all-vocab').addEventListener('click', () => {
    getVocab(user.uid).then(showVocab);
  });
  document.querySelector('#nouns').addEventListener('click', () => {
    filterNoun(user.uid).then(showVocab);
  });
  document.querySelector('#verbs').addEventListener('click', () => {
    filterVerb(user.uid).then(showVocab);
  });
  document.querySelector('#adjectives').addEventListener('click', () => {
    filterAdj(user.uid).then(showVocab);
  });
  document.querySelector('#adverbs').addEventListener('click', () => {
    filterAdverb(user.uid).then(showVocab);
  });
};
export default navigationEvents;
