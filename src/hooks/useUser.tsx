import { create } from 'zustand';

// 토큰도 그냥 여기서 관리?

interface IState {
  userId: number;
  nickname: string;
}

type User = {
  user: {
    userId: number;
    nickname: string;
    profileURL: string;
  };
  addUser: ({ userId, nickname }: IState) => void;
};

const useUser = create<User>((set) => ({
  user: {
    userId: 1,
    nickname: 'ㅌㅌ',
    profileURL: '',
  },
  addUser: ({ userId, nickname }) => {
    set((state) => ({
      user: { ...state.user, userId, nickname },
    }));
  },
}));

export default useUser;
