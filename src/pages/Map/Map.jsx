import { useState, useEffect } from 'react';
import axios from 'axios';
import { Wrap, MapCont } from './mapStyle';
import HeaderBSM from '../../components/header/HeaderBSM';
import KakaoMap from './KakaoMap';
import ModalWrapper from './ModalWrapper';
import NavBar from '../../components/navBar/NavBar';

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
  const URL = 'https://mandarin.api.weniv.co.kr';
  const authToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYTMxZWRkMTdhZTY2NjU4MWU1NjY5NiIsImV4cCI6MTY3NjgxODkzNSwiaWF0IjoxNjcxNjM0OTM1fQ.Nm7Rc38FYzTTWAuRqWHiVpxLafCLFiNWzx29Q2jyp0g';
  const accountName = 'pore_photozone';
  const getModal = async () => {
    try {
      const res = await axios.get(`${URL}/product/${accountName}?limit=150`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
          'Content-type': 'application/json',
        },
      });
      //   console.log(res.data.product);
      setModals(res.data.product);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => getModal, []);
  //

  return (
    <Wrap>
      <HeaderBSM text={text} onChange={onChange} onKeyPress={onKeyPress} />
      <MapCont>
        <KakaoMap input={input} modals={modals} />
        <ModalWrapper input={input} modals={modals} />
      </MapCont>
      <NavBar />
    </Wrap>
  );
};

export default Map;
