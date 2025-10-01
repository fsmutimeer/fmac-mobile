
export const sponsors = [
  { id: 1, logo: 'https://picsum.photos/seed/s1/200/80' },
  { id: 2, logo: 'https://picsum.photos/seed/s2/200/80' },
  { id: 3, logo: 'https://picsum.photos/seed/s3/200/80' },
  { id: 4, logo: 'https://picsum.photos/seed/s4/200/80' },
  { id: 5, logo: 'https://picsum.photos/seed/s5/200/80' },
];

export const headerLogos = {
  org: '',
  center: '',
};

export const carouselImages = [
  'https://picsum.photos/seed/carousel1/800/360',
  'https://picsum.photos/seed/carousel2/800/360',
  'https://picsum.photos/seed/carousel3/800/360',
  'https://picsum.photos/seed/carousel4/800/360',
];

export const articles = [
  {
    id: 1,
    title: 'Article1 ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...',
    date: '24 Oct 2024',
    image: 'https://picsum.photos/seed/carousel4/800/360',
    body:
      'Article1 ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    id: 2,
    title: 'Article2 ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...',
    date: '24 Oct 2023',
    image: 'https://picsum.photos/seed/carousel4/800/360',
    body:
      'Article2 ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    id: 3,
    title: 'Lorem12 ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...',
    date: '24 Oct 2025',
    image: 'https://picsum.photos/seed/carousel4/800/360',
    body:
      'Lorem12 ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    id: 4,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...',
    date: '24 Oct 2024',
    image: 'https://picsum.photos/seed/carousel4/800/360',
    body:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
];

// Schedules and Results shared mock data for SectionList
export type EventItem = { id: string; time: string; title: string };
export type DaySection = { dateKey: string; dayNum: string; dayName: string; data: EventItem[] };

export const scheduleSections: DaySection[] = [
  {
    dateKey: '2024-10-16',
    dayNum: '16',
    dayName: 'Monday',
    data: [
      { id: '1', time: '10:30', title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do' },
      { id: '2', time: '12:30', title: 'Lorem ipsum dolor sit amet' },
      { id: '3', time: '13:30', title: 'Lorem ipsum dolor sit amet' },
      { id: '4', time: '14:00', title: 'Lorem ipsum dolor sit amet' },
    ],
  },
  {
    dateKey: '2024-10-17',
    dayNum: '17',
    dayName: 'Tuesday',
    data: [
      { id: '5', time: '10:30', title: 'Lorem ipsum dolor sit amet' },
      { id: '6', time: '12:30', title: 'Lorem ipsum dolor sit amet' },
      { id: '7', time: '13:30', title: 'Lorem ipsum dolor sit amet' },
      { id: '8', time: '14:00', title: 'Lorem ipsum dolor sit amet' },
    ],
  },
  { dateKey: '2024-10-18', dayNum: '18', dayName: 'Wednesday', data: [] },
  { dateKey: '2024-10-19', dayNum: '19', dayName: 'Thursday', data: [] },
];

export const resultsSections: DaySection[] = scheduleSections;