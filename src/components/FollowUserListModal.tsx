import Modal from '@/components/Modal';
import { FollowUserItem } from '@/types/user';
import noImage from '../../public/img/profileimage/profile1.png'

import Image from 'next/image';

interface FollowUserListModalProp {
  userName: string;
  followUserListData: FollowUserItem[];
}

interface FollowUserProp {
  nickname?: string;
  image?: string;
}

interface FollowUserListProp {
  followUserListData: FollowUserItem[];
}

const FollowUserList = ({ followUserListData }: FollowUserListProp) => {
  return (
    <div className="w-full flex flex-col gap-5 lg:gap-[25px]">
      {followUserListData ? (
        followUserListData.map((followUser) => (
          <FollowUser nickname={followUser.follower.nickname} image={followUser.follower.image} />
        ))
      ) : (
        <div className='w-full h-full flex justify-center items-center text-gray-50'>팔로우 유저가 없습니다.</div>
      )}
    </div>
  );
};

const FollowUser = ({ nickname, image }: FollowUserProp) => {
  return (
    <div className="h-12 flex items-center gap-5 lg:h-13">
      <div className="w-12 h-12 relative rounded-full overflow-hidden lg:w-[52px] lg:h-[52px]">
        {image ? (
          <Image
            src={image}
            alt="유저프로필"
            fill
            sizes="(max-width: 1023px) 48px, (min-width: 1024px) 52px"
          />
        ) : (
          <Image
            src={noImage}
            alt="유저프로필"
            fill
            sizes="(max-width: 1023px) 48px, (min-width: 1024px) 52px"
          />
        )}
      </div>
      <span className="font-[16px] font-medium text-gray-50 lg:text-[18px]">{nickname}</span>
    </div>
  );
};

function FollowUserListModal({ userName, followUserListData }: FollowUserListModalProp) {
  return (
    <Modal>
      <div className="pb-4 min-h-[550px] flex flex-col">
        <span className="mb-5 text-[20px] font-semibold text-gray-50 md:mb-10 lg:text-[20px]">
          {userName}님을 팔로우하는 유저
        </span>
        <FollowUserList followUserListData={followUserListData} />
      </div>
    </Modal>
  );
}

export default FollowUserListModal;