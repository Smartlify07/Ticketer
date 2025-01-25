import { EventType } from './types/types';

export const schoolEvents: EventType[] = [
  {
    id: '1',
    location: 'Auditorium',
    attendees: [
      { id: 'u1', name: 'John Doe' },
      { id: 'u2', name: 'Jane Smith' },
    ],
    coverImage:
      'https://res.cloudinary.com/dgpbznsc3/image/upload/v1737764407/5136-Vincent-Avenue-S-Minneapolis-MN-55410-6544058-image78_zffnfo.jpg',
    title: 'Annual Science Fair',
    description:
      'Students showcase innovative science projects and experiments to the school community.',
    type: 'Exhibition',
    startDate: '2025-02-15T09:00:00',
    ticketPrice: 1200, // Adjusted to be in the range 1000 to 3000
  },
  {
    id: '2',
    location: 'School Library',
    attendees: [
      { id: 'u3', name: 'Alice Johnson' },
      { id: 'u4', name: 'Bob Brown' },
    ],
    coverImage:
      'https://res.cloudinary.com/dgpbznsc3/image/upload/v1737764324/What-is-a-Hackathon_feffq6.png',
    title: 'Book Club Meeting',
    description:
      "A gathering for students to discuss this month's book and share their thoughts.",
    type: 'Club Activity',
    startDate: '2025-02-20T16:00:00',
    ticketPrice: 1500, // Adjusted to be in the range 1000 to 3000
  },
  {
    id: '3',
    location: 'School Field',
    attendees: [
      { id: 'u5', name: 'Charlie Green' },
      { id: 'u6', name: 'Diana Blue' },
      { id: 'u7', name: 'Ethan White' },
    ],
    coverImage:
      'https://res.cloudinary.com/dgpbznsc3/image/upload/v1737764468/different_sports_gum6q6.jpg',
    title: 'Sports Day',
    description:
      'A full day of athletic events, competitions, and fun for students and staff.',
    type: 'Sports',
    startDate: '2025-03-01T08:00:00',
    ticketPrice: 2200, // Adjusted to be in the range 1000 to 3000
  },
  {
    id: '4',
    location: 'Room 204',
    attendees: [
      { id: 'u8', name: 'Grace Black' },
      { id: 'u9', name: 'Harry Red' },
    ],
    coverImage:
      'https://res.cloudinary.com/dgpbznsc3/image/upload/v1737764324/What-is-a-Hackathon_feffq6.png',
    title: 'Math Workshop',
    description:
      'An interactive session to help students improve their math skills with fun activities.',
    type: 'Workshop',
    startDate: '2025-03-10T10:00:00',
    ticketPrice: 1800, // Adjusted to be in the range 1000 to 3000
  },
  {
    id: '5',
    location: 'School Hall',
    attendees: [
      { id: 'u10', name: 'Isla Purple' },
      { id: 'u11', name: 'Jack Orange' },
    ],
    coverImage:
      'https://res.cloudinary.com/dgpbznsc3/image/upload/v1737764407/5136-Vincent-Avenue-S-Minneapolis-MN-55410-6544058-image78_zffnfo.jpg',
    title: 'Drama Club Performance',
    description:
      'The Drama Club presents their latest play, showcasing student talent and creativity.',
    type: 'Performance',
    startDate: '2025-03-15T18:00:00',
    ticketPrice: 2000, // Adjusted to be in the range 1000 to 3000
  },
  {
    id: '6',
    location: 'Computer Lab',
    attendees: [
      { id: 'u12', name: 'Kelly Grey' },
      { id: 'u13', name: 'Liam Cyan' },
    ],
    coverImage:
      'https://res.cloudinary.com/dgpbznsc3/image/upload/v1737764324/What-is-a-Hackathon_feffq6.png',
    title: 'Coding Hackathon',
    description:
      'Students team up to solve coding challenges and build innovative software projects.',
    type: 'Competition',
    startDate: '2025-03-20T09:00:00',
    ticketPrice: 2500, // Adjusted to be in the range 1000 to 3000
  },
];
