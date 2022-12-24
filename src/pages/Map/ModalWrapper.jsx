import MapModal from './MapModal';
import { ModalWrap } from './mapStyle';

const ModalWrapper = ({ result, modals, keyword }) => {
  return (
    <ModalWrap>
      {modals.map((v) =>
        result === keyword ? <MapModal key={v.id} modals={v} /> : null,
      )}
    </ModalWrap>
  );
};

export default ModalWrapper;
