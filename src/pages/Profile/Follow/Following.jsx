import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import User from '../../../components/user/User';
import { Wrap } from './followStyle';
import HeaderFollowing from '../../../components/header/HeaderFollowing';
import { getFollowing } from '../../../store/followSlice';

const Following = () => {
  const dispatch = useDispatch();
  const getfollowingData = useSelector((state) => state.follow.followData);
  useEffect(() => {
    dispatch(getFollowing());
  }, []);
  const followingList = getfollowingData.payload;

  return (
    <>
      <HeaderFollowing />
      <Wrap>
        {followingList && followingList.map((item) => <User item={item} />)}
      </Wrap>
    </>
  );
};

export default Following;
