import logoutButton from '../components/logoutButton';
import navBar from '../shared/navBar';
import domBuilder from '../shared/domBuilder';
import { getVocab } from '../api/vocabData';
import { showVocab } from '../pages/vocab';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import navigationEvents from '../events/navigationEvents';

const startApp = () => {
  domBuilder();
  domEvents();
  formEvents();
  navBar();
  navigationEvents();
  logoutButton();

  // puts vocab on the DOM
  getVocab().then((vocab) => showVocab(vocab));
};

export default startApp;
