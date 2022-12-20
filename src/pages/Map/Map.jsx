import { useState } from 'react';
import HeaderBSM from '../../components/header/HeaderBSM';
import { Wrap, MapCont, MapWrap } from './mapStyle';
import MapModal from './MapModal';
import NavBar from '../../components/navBar/NavBar';
import KakaoMap from './KakaoMap';

const Map = () => {
  const [text, setText] = useState('');
  const [result, setResult] = useState('');
  const onChange = (e) => {
    setText(e.target.value);
    console.log('it works!');
  };
  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      setResult(text);
    }
  };

  return (
    <Wrap>
      <HeaderBSM text={text} onChange={onChange} onKeyPress={onKeyPress} />
      <MapCont>
        <KakaoMap text={text} result={result} />
        <MapWrap>
          <MapModal />
          <MapModal />
          <MapModal />
        </MapWrap>
      </MapCont>
      <NavBar />
    </Wrap>
  );
};

export default Map;
