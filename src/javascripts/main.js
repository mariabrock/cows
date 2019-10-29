import 'bootstrap';
import '../styles/main.scss';
import cowList from './components/cowList/cowList';
import farmerList from './components/farmerList/farmerList';
import farmerCowData from './helpers/data/farmerCowData';


const init = () => {
  cowList.buildCows();
  farmerList.buildFarmers();

  farmerCowData.getFarmerCows()
    .then((response) => {
      console.log('farmerCowsArray from main.js', response);
    })
    .catch((error) => {
      console.error('it broke', error);
    });
};

init();
