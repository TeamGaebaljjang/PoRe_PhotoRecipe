import { MoveBtn } from './homeStyle';

const HomeCarouselPagination = ({ direction, moveSlide }) => {
  return (
    <button type="button" onClick={moveSlide}>
      {direction === 'next' && <MoveBtn className="right" type="button" />}
      {direction === 'prev' && <MoveBtn className="left" type="button" />}
    </button>
  );
};

export default HomeCarouselPagination;
