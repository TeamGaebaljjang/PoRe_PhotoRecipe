import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import User from '../../../components/user/User';
import { Wrap } from './followStyle';
import HeaderFollower from '../../../components/header/HeaderFollower';
import { getFollower } from '../../../store/followSlice';

const Follower = () => {
  const dispatch = useDispatch();
  const getfollowerData = useSelector((state) => state.follow.followerData);
  useEffect(() => {
    dispatch(getFollower());
  }, []);
  const followerList = getfollowerData.payload;

  console.log(followerList);

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
