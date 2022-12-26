import MapModal from './MapModal';
import { ModalWrap } from './mapStyle';

const ModalWrapper = ({ modals, input }) => {
  //   console.log(modals);
  return (
    <ModalWrap>
      {modals.map((v) =>
        v.itemName.split('/')[2] === input ? <MapModal key={v.id} /> : null,
      )}
    </ModalWrap>
  );
};

export default ModalWrapper;
