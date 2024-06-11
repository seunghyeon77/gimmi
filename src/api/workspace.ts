import customAxios from '@/utils/cutstomAxios';

enum ListType {
  'READY',
  'IN-PROGRESS',
  'COMPLETED',
  '',
}

type SearchProps = {
  type?: ListType;
  keyword?: string;
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

export { myWorkspaces, allWorkspaces };
