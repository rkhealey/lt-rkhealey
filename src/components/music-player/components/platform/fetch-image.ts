import { get } from 'lodash';

export default async (id: string): Promise<string> => {
  const logo = await import(`../../../../images/music/${id}.svg`);
  return get(logo, 'default', null);
};
