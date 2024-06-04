import logoutButton from '../components/logoutButton';
import navBar from '../shared/navBar';
import domBuilder from '../shared/domBuilder';

const startApp = () => {
  domBuilder();
  navBar();
  logoutButton();
};

export default startApp;
