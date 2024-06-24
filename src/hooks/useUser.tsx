import { create } from 'zustand';

// 토큰도 그냥 여기서 관리?

type User = {
  user: {
    userId: number;
    nickname: string;
    profileURL: string;
  };
  addUser: (userId: number) => void;
};

const useUser = create<User>((set) => ({
  user: {
    userId: 0,
    nickname: '',
    profileURL: '',
  },
  addUser: (userId) => {
    set((state) => ({
      user: { ...state.user, userId },
    }));
  },
}));

export default useUser;
