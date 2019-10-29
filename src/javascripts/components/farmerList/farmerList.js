import './farmerList.scss';
import farmerData from '../../helpers/data/farmerData';

const buildFarmers = () => {
  farmerData.getFarmers()
    .then((farmers) => {
      console.log('farmerArray from farmer list', farmers);
    })
    .catch((error) => console.error('it broke', error));
};

export default { buildFarmers };
