import MapModal from './MapModal';
import { ModalWrap } from './mapStyle';

const ModalWrapper = ({ modals, text }) => {
  console.log(text);
  return (
    <ModalWrap>
      {modals &&
        modals.map((v) =>
          v?.itemName === text ? <MapModal v={v} key={v.id} /> : null,
        )}
    </ModalWrap>
  );
};

export default ModalWrapper;
