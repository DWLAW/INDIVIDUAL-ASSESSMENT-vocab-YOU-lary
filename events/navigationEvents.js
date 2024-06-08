import {
  filterAdj, filterAdverb, filterNoun, filterVerb, getVocab
} from '../api/vocabData';
import { showVocab } from '../pages/vocab';

const navigationEvents = () => {
  document.querySelector('#all-vocab').addEventListener('click', () => {
    getVocab().then(showVocab);
  });
  document.querySelector('#nouns').addEventListener('click', () => {
    filterNoun().then(showVocab);
  });
  document.querySelector('#verbs').addEventListener('click', () => {
    filterVerb().then(showVocab);
  });
  document.querySelector('#adjectives').addEventListener('click', () => {
    filterAdj().then(showVocab);
  });
  document.querySelector('#adverbs').addEventListener('click', () => {
    filterAdverb().then(showVocab);
  });
};
export default navigationEvents;
