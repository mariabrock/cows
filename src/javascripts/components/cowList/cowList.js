import cows from '../../helpers/data/cows';
import './cowList.scss';

const buildCows = () => {
  cows.getCows()
    .then((response) => {
      console.log('it worked!', response);
    })
    .catch((error) => {
      console.error('it broke', error);
    });
};

export default { buildCows };
