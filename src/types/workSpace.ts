interface IMission {
  mission: string;
  score: number;
}

export interface IWorkspaceDetail {
  creator: number;
  name: string;
  headCount: number;
  goalScore: number;
  description: string;
  missionBoard: IMission[];
  task: string;
}

export interface IWorkspace {
  id: number;
  name: string;
  creator: string;
  state: '진행중' | '진행전' | '완료됨';
  createdAt: Date;
  achievementRate: number;
  tags: string[];
  taskScore: number;
  title: string;
}

interface IMissionBoard {
  id: number;
  title: string;
  score: number;
  placeholder?: string;
}
export interface IWorkspaceInputs {
  name: string;
  headCount: number | string;
  goalScore: number | string;
  description: string;
  tag: string;
  missionBoard: IMissionBoard[];
  task: string;
}
export interface IW {
  groupMaker: IWorkspaceInputs;
  add1Page: ({ name, headCount }: any) => void;
  add2Page: ({ missionBoard, goalScore }: any) => void;
  add3Page: ({ task, description }: any) => void;
}
