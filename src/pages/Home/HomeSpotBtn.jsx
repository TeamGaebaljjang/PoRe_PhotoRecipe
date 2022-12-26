import { useState } from 'react';
import { SpotTab, SpotBtn } from './homeStyle';

const HomeSpotBtn = () => {
  const place = ['서울', '경기', '강원', '제주', '부산'];
  const [btnActive, setBtnActive] = useState('');

  const handleActive = (e) => {
    setBtnActive(() => {
      return e.target.value;
    });
  };

  return (
    <SpotTab>
      {place.map((spotName) => {
        return (
          <SpotBtn
            key={crypto.randomUUID()}
            value={spotName}
            className={spotName === btnActive ? 'active' : ''}
            onClick={handleActive}
          >
            {spotName}
          </SpotBtn>
        );
      })}
    </SpotTab>
  );
};

export default HomeSpotBtn;
