import MapModal from './MapModal';
import { ModalWrap } from './mapStyle';

const ModalWrapper = ({ result, modals }) => {
  //   console.log(result);
  //   console.log(modals);
  return (
    <ModalWrap>
      {/* result 값이 포함된?(정규표현식) '동일한?' v.itemName 만 Modal로 생성해 띄우기  */}
      {modals.map((v) =>
        result === v.itemName ? <MapModal key={v.id} modals={v} /> : null,
      )}
    </ModalWrap>
  );
};

export default ModalWrapper;
