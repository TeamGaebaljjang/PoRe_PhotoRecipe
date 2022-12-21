import { useState, useEffect } from 'react';
import axios from 'axios';
import HeaderBSM from '../../components/header/HeaderBSM';
import { Wrap, MapCont } from './mapStyle';
import MapWrapper from './MapWrapper';
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

  // mandarin api*
  const [modals, setModals] = useState([]);
  const URL = 'https://mandarin.api.weniv.co.kr';
  const authToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYTE1ZTQ4MTdhZTY2NjU4MWQ0ZmRmZCIsImV4cCI6MTY3NjcwMzkzOSwiaWF0IjoxNjcxNTE5OTM5fQ.8rFholhXAFkJWP5Cdg1zoinbxD7t-_L2MQS4pHr1rak';
  //   const accountName = '2sol';
  const getModal = async () => {
    try {
      //   const authToken = localStorage.getItem('token');
      //   const accountName = localStorage.getItem('accountname');
      const res = await axios.get(`${URL}/product`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
          'Content-type': 'application/json',
        },
      });
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
        <KakaoMap result={result} />
        <MapWrapper modals={modals} />
        {/* <MapModal />
          <MapModal />
          <MapModal /> */}
      </MapCont>
      <NavBar />
    </Wrap>
  );
};

export default Map;
