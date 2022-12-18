import { useState } from 'react';
import { Div, Cont, Date } from './photoZoneStyle';

const PhotoZone = ({ src }) => {
  const [test, setTest] = useState(false);

  const testHandle = () => {
    setTest(!test);
  };

  return (
    <Div src={src}>
      <Cont
        onClick={() => {
          testHandle();
        }}
        style={test ? { opacity: '70%' } : { opacity: '0' }}
      >
        크리스마스를 맞아서 사람이 많은 광화문에서 사진을 찍어봤어요! 잘
        나오네요! 저녁에는 맛있는 우육면을 먹었답니다 ^-^ 후후후후 여러분들
        메리꾸리스마스!
      </Cont>
      <Date>20221215</Date>
    </Div>
  );
};

export default PhotoZone;
