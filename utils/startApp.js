import logoutButton from '../components/logoutButton';
import navBar from '../shared/navBar';
import domBuilder from '../shared/domBuilder';
import { getVocab } from '../api/vocabData';
import { showVocab } from '../pages/vocab';
import domEvents from '../events/domEvents';

const startApp = () => {
  domBuilder();
  navBar();
  logoutButton();
  domEvents();

  // puts vocab on the DOM
  getVocab().then((vocab) => showVocab(vocab));
};

export default startApp;
