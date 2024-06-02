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
