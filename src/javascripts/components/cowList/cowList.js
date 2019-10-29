import smash from '../../helpers/data/smash';
import './cowList.scss';

const buildCows = () => {
  smash.getCompleteCows()
    .then((cows) => {
      console.log('cow array from cow list', cows);
      //  call a domstring builder and pass in a response (cows)
    })
    .catch((error) => {
      console.error('it broke', error);
    });
};

export default { buildCows };
