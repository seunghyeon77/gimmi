import { create } from 'zustand';

interface IWorkspaceInputs {
  name: string;
  headCount: number;
  goalScore: number;
  description: string;
  tag: [];
  missionBoard: [];
  task: string;
}
interface IJ {
  groupMaker: IWorkspaceInputs;
  add1Page: ({ name, headCount }: any) => void;
}

export const useWorkSpaceStore = create<IJ>((set) => ({
  groupMaker: {
    name: '',
    headCount: 0,
    goalScore: 0,
    description: '',
    tag: [],
    missionBoard: [],
    task: '',
  },
  add1Page: ({ name, headCount }: IWorkspaceInputs) =>
    set((state: any) => ({
      groupMaker: { ...state.groupMaker, name, headCount },
    })),
  add2Page: ({ missionBoard, goalScore }: IWorkspaceInputs) =>
    set((state: any) => ({
      groupMaker: { ...state.groupMaker, missionBoard, goalScore },
    })),
}));
