import { useState, useEffect } from 'react';
import axios from 'axios';
import { Wrap, MapCont } from './mapStyle';
import HeaderBSM from '../../components/header/HeaderBSM';
import KakaoMap from './KakaoMap';
import ModalWrapper from './ModalWrapper';
import NavBar from '../../components/navBar/NavBar';

const Map = () => {
  const [text, setText] = useState('');

  let timer;
  const onChange = (e) => {
    const search = e.target.value;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      if (search) {
        setText(search);
      } else {
        setText('');
      }
    }, 200);
  };

  //   mandarin API*
  const [modals, setModals] = useState([]);
  const URL = 'https://mandarin.api.weniv.co.kr';
  const authToken = localStorage.getItem('token');
  const accountName = 'pore_photozone';
  const getModal = async () => {
    try {
      const res = await axios.get(`${URL}/product/${accountName}?limit=150`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
          'Content-type': 'application/json',
        },
      });
      console.log(res.data.product);
      setModals(res.data.product);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => getModal, []);
  //

  return (
    <Wrap>
      <HeaderBSM text={text} onChange={onChange} />
      <MapCont>
        <KakaoMap text={text} />
        <ModalWrapper text={text} modals={modals} />
      </MapCont>
      <NavBar />
    </Wrap>
  );
};

export default Map;
