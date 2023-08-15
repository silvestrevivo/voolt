import { getRequest } from '$utils/index';
import type { Industry } from '$types/index';

export const load = async () => {
  const url = `${import.meta.env.VITE_API}`;

  const industries: Industry[] = await getRequest(`${url}industries`);

  return {
    industries,
  };
};
