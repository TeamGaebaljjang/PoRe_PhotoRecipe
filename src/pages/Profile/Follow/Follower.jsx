import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import User from '../../../components/user/User';
import { Wrap } from './followStyle';
import HeaderFollower from '../../../components/header/HeaderFollower';
import { getFollower } from '../../../store/followSlice';

const Follower = () => {
  const dispatch = useDispatch();
  const getfollowerData = useSelector((state) => state.follow.followData);
  useEffect(() => {
    dispatch(getFollower());
  }, []);
  const followerList = getfollowerData.payload;

  console.log(followerList);

  return (
    <>
      <HeaderFollower />
      <Wrap>
        <Wrap>
          {followerList && followerList.map((item) => <User item={item} />)}
        </Wrap>
      </Wrap>
    </>
  );
};

export default Follower;
