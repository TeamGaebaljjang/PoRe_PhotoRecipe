import MapModal from './MapModal';
import { ModalWrap } from './mapStyle';

const ModalWrapper = ({ modals, input }) => {
  return (
    <ModalWrap>
      {modals &&
        modals.map((v) =>
          v?.itemName === input ? <MapModal v={v} key={v.id} /> : null,
        )}
    </ModalWrap>
  );
};

export default ModalWrapper;
