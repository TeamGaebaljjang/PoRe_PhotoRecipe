import { useState, useEffect } from 'react';
import { Wrap, MapCont } from './mapStyle';
import HeaderBSM from '../../components/header/HeaderBSM';
import KakaoMap from './KakaoMap';
import ModalWrapper from './ModalWrapper';
import NavBar from '../../components/navBar/NavBar';
import { api } from '../../axiosInstance';

const Map = () => {
  const [text, setText] = useState('');
  const [input, setInput] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
  };
  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      setInput(text);
    }
  };

  //   mandarin API*
  const [modals, setModals] = useState([]);
  const accountName = 'pore_photozone';
  const getModal = async () => {
    try {
      const res = await api.get(`/product/${accountName}?limit=150`);
      setModals(res.data.product);
    } catch (error) {
      console.log(error.res);
    }
  };
  useEffect(() => {
    getModal();
  }, []);

  return (
    <Wrap>
      <HeaderBSM text={text} onChange={onChange} onKeyPress={onKeyPress} />
      <MapCont>
        <KakaoMap input={input} />
        <ModalWrapper input={input} modals={modals} />
      </MapCont>
      <NavBar />
    </Wrap>
  );
};

export default Map;
