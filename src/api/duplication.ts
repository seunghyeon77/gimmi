import customAxios from '@/utils/cutstomAxios';

type Props = {
  type: string;
  value: string;
};

export const verlifyDuplication = async ({ type, value }: Props) => {
  const response = await customAxios.get(
    `/check-duplication?type=${type}&value=${value}`,
  );
  return response;
};
