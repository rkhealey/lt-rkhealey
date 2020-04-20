import React from 'react';
import { noop } from 'lodash';
import { shallow } from 'enzyme';
import { mocked } from 'ts-jest/utils';
import Platform from '.';
import fetchImage from './fetch-image';

const mockData = [
  {
    id: 'spotify',
    name: 'Spotify',
    url: 'https://open.spotify.com/track/7pKfPomDEeI4TPT6EOYjn9?si=JVKZYLN8RdqzxIFZ_NwhfQ',
    songId: '7pKfPomDEeI4TPT6EOYjn9',
  },
  {
    id: 'extra-platform',
    name: 'Extra Platform',
    url: 'https://extraplatform.com',
    songId: '7pKfPomDEeI4TPT6EOYjn9',
  },
];

jest.spyOn(React, 'useEffect').mockImplementationOnce((f) => f());
jest.mock('./fetch-image');
const mockedFetch = mocked(fetchImage, true);
mockedFetch.mockResolvedValue('/path-to-image.svg');

describe('Platform', () => {
  it('Renders', async () => {
    const wrapper = shallow(<Platform {...mockData[0]} onLaunchPlayer={noop} />);
    // wait for useEffect to finish
    await Promise.resolve();
    expect(wrapper).toMatchSnapshot();
  });

  it('Returns null if logo is not found', () => {
    const wrapper = shallow(<Platform {...mockData[1]} onLaunchPlayer={noop} />);
    expect(wrapper).toEqual({});
  });
});
