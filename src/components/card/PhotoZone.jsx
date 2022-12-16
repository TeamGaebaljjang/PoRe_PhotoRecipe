import { useState } from 'react';
import * as styled from './photozoneStyle';

const PhotoZone = ({ src }) => {
  const [test, setTest] = useState(false);

  const testHandle = () => {
    setTest(!test);
  };

  return (
    <styled.Div src={src}>
      <styled.Cont
        onClick={() => {
          testHandle();
        }}
        style={test ? { opacity: '70%' } : { opacity: '0' }}
      >
        크리스마스를 맞아서 사람이 많은 광화문에서 사진을 찍어봤어요! 잘
        나오네요! 저녁에는 맛있는 우육면을 먹었답니다 ^-^ 집에 갈때는 흠 몇시에
        갈지 후후후후 여러분들
      </styled.Cont>
      <styled.Date>20221215</styled.Date>
    </styled.Div>
  );
};

export default PhotoZone;
