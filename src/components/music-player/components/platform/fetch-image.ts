import { get } from 'lodash';

export default async (slug: string): Promise<string> => {
  const logo = await import(`../../../../images/music/${slug}.svg`);
  return get(logo, 'default', null);
};
