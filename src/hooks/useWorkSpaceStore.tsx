import { IW, IWorkspaceInputs } from '@/types/\bworkSpace';
import { create } from 'zustand';

export const useWorkSpaceStore = create<IW>((set) => ({
  groupMaker: {
    name: '',
    headCount: '',
    goalScore: '',
    description: '',
    tag: '',
    missionBoard: [
      { id: 0, mission: '', placeholder: 'ex 풀업 10회', score: 0 },
      { id: 1, mission: '', placeholder: 'ex 벤치프레스 10회', score: 0 },
      { id: 2, mission: '', placeholder: '스쿼트 10회', score: 0 },
      { id: 3, mission: '', placeholder: '러닝 20분', score: 0 },
      { id: 4, mission: '', placeholder: '런지 10회', score: 0 },
    ],
    task: '',
    checked: false,
  },
  add1Page: ({ name, headCount, checked }: IWorkspaceInputs) =>
    set((state) => ({
      groupMaker: { ...state.groupMaker, name, headCount, checked },
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
        tag,
      },
    })),
}));
