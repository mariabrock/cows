import cowData from '../../helpers/data/cows';
import './cowList.scss';

const buildCows = () => {
  cowData.getCows()
    .then((cows) => {
      console.log('cow array from cow list', cows);
      //  call a domstring builder and pass in a response (cows)
    })
    .catch((error) => {
      console.error('it broke', error);
    });
};

export default { buildCows };
