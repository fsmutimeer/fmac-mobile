
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

// Tickets mock data
export type TicketEvent = {
  id: string;
  name: string;
  date: string; // e.g. Sat, 11 Nov · 10:45 AM
  venue?: string;
  days: { id: string; label: string; date: string; weekday: string }[];
};

export const ticketEvents: TicketEvent[] = [
  {
    id: 'evt1',
    name: 'Boxing Match',
    date: 'Sat, 11 · 10:45 AM',
    venue: 'Dubai, UAE',
    days: [
      { id: 'd1', label: 'Day 1', date: '01 Jan 2025', weekday: 'Monday' },
      { id: 'd2', label: 'Day 2', date: '02 Jan 2025', weekday: 'Tuesday' },
      { id: 'd3', label: 'Day 3', date: '03 Jan 2025', weekday: 'Wednesday' },
      { id: 'd4', label: 'Day 4', date: '04 Jan 2025', weekday: 'Thursday' },
      { id: 'd5', label: 'Day 5', date: '05 Jan 2025', weekday: 'Friday' },
      { id: 'd6', label: 'Day 6', date: '06 Jan 2025', weekday: 'Saturday' },
      { id: 'd7', label: 'Day 7', date: '07 Jan 2025', weekday: 'Sunday' },
      { id: 'd8', label: 'Day 8', date: '08 Jan 2025', weekday: 'Monday' },
      { id: 'd9', label: 'Day 9', date: '09 Jan 2025', weekday: 'Tuesday' },
      { id: 'd10', label: 'Day 10', date: '10 Jan 2025', weekday: 'Wednesday' },
    ],
  },
  { id: 'evt2', name: 'Fight-Night', date: 'Sat, 11 · 10:45 AM', venue: 'Dubai, UAE',  days: [
    { id: 'd1', label: 'Day 1', date: '01 Jan 2025', weekday: 'Monday' },] },
  { id: 'evt3', name: 'The-basketball-game', date: 'Sat, 11 · 10:45 AM', venue: 'Dubai, UAE', days: [] },
  { id: 'evt4', name: 'the-tennis-match', date: 'Sat, 11 · 10:45 AM', venue: 'Dubai, UAE', days: [] },
  { id: 'evt5', name: 'the-football-match', date: 'Sat, 11 · 10:45 AM', venue: 'Dubai, UAE', days: [] },
];

// Teams and Athletes data
export type Athlete = {
  id: string;
  name: string;
  teamId: string;
  countryCode: string;
  countryName: string;
  weight: string;
  category: string;
  event: string;
  rank: number;
  seed: number;
  rounds: {
    R256?: number;
    R128?: number;
    R64?: number;
    R32?: number;
    R16?: number;
    QF?: number;
    SF?: number;
    F?: number;
  };
};

export type Official = {
  id: string;
  name: string;
  teamId: string;
  countryCode: string;
  countryName: string;
  weight: string;
  function: string;
};

export type Team = {
  id: string;
  teamNumber: string;
  countryCode: string;
  countryName: string;
  fullName: string;
  athletesCount: number;
  officialsCount: number;
  athletes: Athlete[];
  officials: Official[];
  flagUrl?: string;
};

export const teams: Team[] = [
  {
    id: 'team1',
    teamNumber: '001',
    countryCode: 'CHA',
    countryName: 'Chad',
    fullName: 'Chad Republic Nation Team United Club From The North District',
    athletesCount: 7,
    officialsCount: 10,
    athletes: [
      {
        id: 'ath1',
        name: 'John Doe Derik',
        teamId: 'team1',
        countryCode: 'CHA',
        countryName: 'Chad',
        weight: 'CHA-154844',
        category: 'Senior',
        event: 'Men-58',
        rank: 9,
        seed: 9,
        rounds: {
          R256: 101,
          R128: 105,
          R64: 110,
          R32: 115,
          R16: 120,
          QF: 125,
          SF: 130,
          F: 130,
        },
      },
      {
        id: 'ath2',
        name: 'Sarah Johnson',
        teamId: 'team1',
        countryCode: 'CHA',
        countryName: 'Chad',
        weight: 'CHA-154845',
        category: 'Senior',
        event: 'Women-49',
        rank: 5,
        seed: 5,
        rounds: {
          R64: 110,
          R32: 115,
          R16: 120,
          QF: 125,
          SF: 130,
          F: 130,
        },
      },
      {
        id: 'ath3',
        name: 'Michael Brown',
        teamId: 'team1',
        countryCode: 'CHA',
        countryName: 'Chad',
        weight: 'CHA-154846',
        category: 'Senior',
        event: 'Men-68',
        rank: 12,
        seed: 12,
        rounds: {
          R128: 105,
          R64: 110,
          R32: 115,
          R16: 120,
          QF: 125,
        },
      },
    ],
    officials: [
      {
        id: 'off1',
        name: 'John Doe Derik',
        teamId: 'team1',
        countryCode: 'CHA',
        countryName: 'Chad',
        weight: 'CHA-154844',
        function: 'Head Coach',
      },
      {
        id: 'off2',
        name: 'Maria Rodriguez',
        teamId: 'team1',
        countryCode: 'CHA',
        countryName: 'Chad',
        weight: 'CHA-154845',
        function: 'Assistant Coach',
      },
      {
        id: 'off3',
        name: 'David Wilson',
        teamId: 'team1',
        countryCode: 'CHA',
        countryName: 'Chad',
        weight: 'CHA-154846',
        function: 'Team Manager',
      },
    ],
  },
  {
    id: 'team2',
    teamNumber: '002',
    countryCode: 'USA',
    countryName: 'United States',
    fullName: 'United States National Taekwondo Team',
    athletesCount: 12,
    officialsCount: 8,
    athletes: [
      {
        id: 'ath4',
        name: 'Alex Thompson',
        teamId: 'team2',
        countryCode: 'USA',
        countryName: 'United States',
        weight: 'USA-154847',
        category: 'Senior',
        event: 'Men-80',
        rank: 3,
        seed: 3,
        rounds: {
          R64: 110,
          R32: 115,
          R16: 120,
          QF: 125,
          SF: 130,
          F: 130,
        },
      },
      {
        id: 'ath5',
        name: 'Emma Davis',
        teamId: 'team2',
        countryCode: 'USA',
        countryName: 'United States',
        weight: 'USA-154848',
        category: 'Senior',
        event: 'Women-57',
        rank: 7,
        seed: 7,
        rounds: {
          R128: 105,
          R64: 110,
          R32: 115,
          R16: 120,
          QF: 125,
        },
      },
    ],
    officials: [
      {
        id: 'off4',
        name: 'Robert Smith',
        teamId: 'team2',
        countryCode: 'USA',
        countryName: 'United States',
        weight: 'USA-154847',
        function: 'Head Coach',
      },
      {
        id: 'off5',
        name: 'Lisa Anderson',
        teamId: 'team2',
        countryCode: 'USA',
        countryName: 'United States',
        weight: 'USA-154848',
        function: 'Assistant Coach',
      },
    ],
  },
  {
    id: 'team3',
    teamNumber: '003',
    countryCode: 'KOR',
    countryName: 'South Korea',
    fullName: 'South Korea National Taekwondo Federation Team',
    athletesCount: 15,
    officialsCount: 12,
    athletes: [
      {
        id: 'ath6',
        name: 'Kim Min-jun',
        teamId: 'team3',
        countryCode: 'KOR',
        countryName: 'South Korea',
        weight: 'KOR-154849',
        category: 'Senior',
        event: 'Men-58',
        rank: 1,
        seed: 1,
        rounds: {
          R64: 110,
          R32: 115,
          R16: 120,
          QF: 125,
          SF: 130,
          F: 130,
        },
      },
      {
        id: 'ath7',
        name: 'Park So-young',
        teamId: 'team3',
        countryCode: 'KOR',
        countryName: 'South Korea',
        weight: 'KOR-154850',
        category: 'Senior',
        event: 'Women-49',
        rank: 2,
        seed: 2,
        rounds: {
          R64: 110,
          R32: 115,
          R16: 120,
          QF: 125,
          SF: 130,
          F: 130,
        },
      },
    ],
    officials: [
      {
        id: 'off6',
        name: 'Lee Sung-ho',
        teamId: 'team3',
        countryCode: 'KOR',
        countryName: 'South Korea',
        weight: 'KOR-154849',
        function: 'Head Coach',
      },
      {
        id: 'off7',
        name: 'Choi Hye-jin',
        teamId: 'team3',
        countryCode: 'KOR',
        countryName: 'South Korea',
        weight: 'KOR-154850',
        function: 'Assistant Coach',
      },
    ],
  },
];

// Get all athletes from all teams
export const allAthletes: Athlete[] = teams.reduce((acc: Athlete[], team: Team) => {
  return [...acc, ...team.athletes];
}, []);

// Filter options
export const genderOptions = ['All', 'Male', 'Female'];
export const weightDivisionOptions = ['All', 'Men-58', 'Men-68', 'Men-80', 'Women-49', 'Women-57', 'Women-67'];