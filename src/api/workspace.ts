import { workspace } from '@/constants/queryKey';
import { IWorkspaceInputs } from '@/types/\bworkSpace';
import customAxios from '@/utils/cutstomAxios';

enum ListType {
  'PREPARING',
  'IN-PROGRESS',
  'COMPLETED',
  '',
}

type SearchProps = {
  type?: ListType;
  keyword?: string;
};

type JoinWorkspace = {
  password: string;
  task: string;
  workspaceId: number;
};

interface IMissions {
  id: number;
  count: number;
}

type Mission = {
  workspaceId: number;
  missions: IMissions[];
};

const myWorkspaces = async () => {
  const res = await customAxios.get('/workspaces/my');
  return res;
};

const allWorkspaces = async ({ type, keyword }: SearchProps) => {
  const res = await customAxios.get(
    `/workspaces?type=${type}keyword=${keyword}`,
  );
  return res;
};

const createWorkspace = async (data: IWorkspaceInputs) => {
  const res = await customAxios.post('/workspaces', data);
  return res;
};

const matchPassword = async (workspaceId: number) => {
  const res = await customAxios.get(
    `/workspaces/${workspaceId}/match-password`,
  );
  return res;
};

const joinWorkspace = async ({
  password,
  task,
  workspaceId,
}: JoinWorkspace) => {
  const formData = { password, task };
  const res = await customAxios.post(
    `/workspaces/${workspaceId}/join`,
    formData,
  );
  return res;
};

const startWorkspace = async (workspaceId: number) => {
  const res = await customAxios.patch(`/workspaces/${workspaceId}/start`);
  return res;
};

const infoWorkspace = async (workspaceId: number) => {
  const res = await customAxios.get(`/workspaces/${workspaceId}`);
  return res;
};

const missionsWorkspace = async (workspaceId: number) => {
  const res = await customAxios.get(`/workspaces/${workspaceId}/missions`);
  return res;
};

const postMissions = async ({ workspaceId, missions }: Mission) => {
  const res = await customAxios.post(
    `/workspaces/${workspaceId}/missions`,
    missions,
  );
  return res;
};

export {
  myWorkspaces,
  allWorkspaces,
  createWorkspace,
  joinWorkspace,
  startWorkspace,
  infoWorkspace,
  matchPassword,
  missionsWorkspace,
  postMissions,
};
