import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import User from '../../../components/user/User';
import { Wrap } from './followStyle';
import HeaderFollower from '../../../components/header/HeaderFollower';
import { getFollower } from '../../../store/followSlice';

const Follower = () => {
  const location = useLocation();
  const userInfo = { ...location.state };
  const dispatch = useDispatch();
  const getfollowerData = useSelector((state) => state.follow.followerData);
  useEffect(() => {
    dispatch(getFollower(userInfo.accountname));
  }, []);
  const followerList = getfollowerData.payload;

  return (
    <>
      <HeaderFollower />
      <Wrap>
        {followerList &&
          followerList.map((item) => (
            <User key={crypto.randomUUID()} item={item} />
          ))}
      </Wrap>
    </>
  );
};

export default Follower;
