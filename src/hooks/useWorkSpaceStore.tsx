import { IW, IWorkspaceInputs } from '@/types/\bworkSpace';
import { create } from 'zustand';

export const useWorkSpaceStore = create<IW>((set) => ({
  groupMaker: {
    name: '',
    headCount: 0,
    goalScore: 0,
    description: '',
    tag: [],
    missionBoard: [
      { id: 0, title: '', placeholder: 'ex 풀업 10회', score: 0 },
      { id: 1, title: '', placeholder: 'ex 벤치프레스 10회', score: 0 },
      { id: 2, title: '', placeholder: '스쿼트 10회', score: 0 },
      { id: 3, title: '', placeholder: '러닝 20분', score: 0 },
    ],
    task: '',
  },
  add1Page: ({ name, headCount }: IWorkspaceInputs) =>
    set((state) => ({
      groupMaker: { ...state.groupMaker, name, headCount },
    })),
  add2Page: ({ missionBoard, goalScore }: IWorkspaceInputs) =>
    set((state) => ({
      groupMaker: {
        ...state.groupMaker,
        missionBoard,
        goalScore,
      },
    })),
  add3Page: ({ task, tag, description }: IWorkspaceInputs) =>
    set((state) => ({
      groupMaker: {
        ...state.groupMaker,
        task,
        description,
      },
    })),
}));
