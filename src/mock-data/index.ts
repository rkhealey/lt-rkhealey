import profile from './profile.png';

export const user = {
  username: '@yourname',
  imageSrc: profile,
};

export const theme = {
  background_color: 'rebeccapurple',
  text_color: 'palegoldenrod',
};

export const links = [
  {
    url: 'http://www.google.com?1',
    text: 'Link One',
  },
  {
    url: 'http://www.google.com?2',
    text: 'Link Two',
  },
  {
    url: 'http://www.google.com?3',
    text: 'Link Three',
  },
  {
    url: 'http://www.google.com?4',
    text: 'Link Four',
  },
  {
    url: 'http://www.google.com?5',
    text: 'Link Five',
  },
];

export const showLinks = {
  title: 'Shows',
  links: [
    {
      date: 'April 01 2019',
      venue: 'The Forum, Melbourne',
      url: 'http://www.songkick.com/1',
      available: true,
    },
    {
      date: 'April 02 2019',
      venue: 'Venue Name, Canberra',
      url: 'http://www.songkick.com/2',
      available: false,
    },
    {
      date: 'April 03 2019',
      venue: 'Venue Name, Sydney',
      url: 'http://www.songkick.com/3',
      available: true,
    },
    {
      date: 'April 04 2019',
      venue: 'Venue Name, Brisbane',
      url: 'http://www.songkick.com/4',
      available: true,
    },
  ],
};

export const musicPlayer = {
  title: 'Music',
  artist: 'John Lennon',
  name: 'Imagine',
  links: [
    {
      id: 'spotify',
      platform: 'Spotify',
      url: 'https://open.spotify.com/track/7pKfPomDEeI4TPT6EOYjn9?si=JVKZYLN8RdqzxIFZ_NwhfQ',
      songId: '7pKfPomDEeI4TPT6EOYjn9',
    },
    {
      id: 'apple-music',
      platform: 'Apple Music',
      url: 'https://open.spotify.com/track/7pKfPomDEeI4TPT6EOYjn9?si=JVKZYLN8RdqzxIFZ_NwhfQ&1',
      songId: '7pKfPomDEeI4TPT6EOYjn9',
    },
    {
      id: 'soundcloud',
      platform: 'Soundcloud',
      url: 'https://open.spotify.com/track/7pKfPomDEeI4TPT6EOYjn9?si=JVKZYLN8RdqzxIFZ_NwhfQ&2',
      songId: '7pKfPomDEeI4TPT6EOYjn9',
    },
    {
      id: 'youtube-music',
      platform: 'Youtube Music',
      url: 'https://open.spotify.com/track/7pKfPomDEeI4TPT6EOYjn9?si=JVKZYLN8RdqzxIFZ_NwhfQ&3',
      songId: '7pKfPomDEeI4TPT6EOYjn9',
    },
  ],
};
