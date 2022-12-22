import { useState, useEffect } from 'react';
import axios from 'axios';
import HeaderBSM from '../../components/header/HeaderBSM';
import { Wrap, MapCont } from './mapStyle';
import ModalWrapper from './ModalWrapper';
import NavBar from '../../components/navBar/NavBar';
import KakaoMap from './KakaoMap';

const Map = () => {
  const [text, setText] = useState('');
  const [result, setResult] = useState('');
  const onChange = (e) => {
    setText(e.target.value);
  };
  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      setResult(text);
    }
  };

  // mandarin API*
  const [modals, setModals] = useState([]);
  const URL = 'https://mandarin.api.weniv.co.kr';
  const authToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYTE1ZTQ4MTdhZTY2NjU4MWQ0ZmRmZCIsImV4cCI6MTY3NjcwMzkzOSwiaWF0IjoxNjcxNTE5OTM5fQ.8rFholhXAFkJWP5Cdg1zoinbxD7t-_L2MQS4pHr1rak';

  //   const realauthToken =
  //     'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYTMxZWRkMTdhZTY2NjU4MWU1NjY5NiIsImV4cCI6MTY3NjgxODkzNSwiaWF0IjoxNjcxNjM0OTM1fQ.Nm7Rc38FYzTTWAuRqWHiVpxLafCLFiNWzx29Q2jyp0g';
  //   const accountName = 'pore_photozone';

  //   포토존 등록하는대로 realauthToken -> authToken, /${accountName} ?
  const getModal = async () => {
    try {
      //   const authToken = localStorage.getItem('token');
      //   const accountName = localStorage.getItem('accountname');
      const res = await axios.get(`${URL}/product?limit=150`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
          'Content-type': 'application/json',
        },
      });
      console.log(res);
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
        <KakaoMap result={result} modals={modals} />
        <ModalWrapper result={result} modals={modals} />
      </MapCont>
      <NavBar />
    </Wrap>
  );
};

export default Map;
