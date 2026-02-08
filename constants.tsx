
import { Video, Category } from './types';

export const CATEGORIES: Category[] = [
  { id: 'all', name: 'All' },
  { id: 'music', name: 'Music' },
  { id: 'gaming', name: 'Gaming' },
  { id: 'live', name: 'Live' },
  { id: 'news', name: 'News' },
  { id: 'sports', name: 'Sports' },
  { id: 'learning', name: 'Learning' },
  { id: 'fashion', name: 'Fashion & Beauty' },
  { id: 'podcasts', name: 'Podcasts' },
  { id: 'tech', name: 'Technology' },
  { id: 'coding', name: 'Coding' },
  { id: 'ai', name: 'AI' },
];

export const MOCK_VIDEOS: Video[] = [
  {
    id: 'v1',
    title: 'Building a World-Class YouTube Clone in React',
    thumbnail: 'https://picsum.photos/seed/yt1/640/360',
    channelName: 'PSM Dev',
    channelAvatar: 'https://picsum.photos/seed/avatar1/48/48',
    views: '1.2M views',
    postedAt: '2 days ago',
    duration: '15:24',
    description: 'Learn how to build a high-performance video streaming platform using React, Tailwind CSS, and Gemini AI.'
  },
  {
    id: 'v2',
    title: 'The Future of Web Development with Gemini 3 Flash',
    thumbnail: 'https://picsum.photos/seed/yt2/640/360',
    channelName: 'Tech Insights',
    channelAvatar: 'https://picsum.photos/seed/avatar2/48/48',
    views: '850K views',
    postedAt: '5 hours ago',
    duration: '10:05',
    description: 'Deep dive into the capabilities of the latest Gemini models for developers.'
  },
  {
    id: 'v3',
    title: 'Chill Lofi Beats for Coding / Relaxing',
    thumbnail: 'https://picsum.photos/seed/yt3/640/360',
    channelName: 'Lofi Girl Clone',
    channelAvatar: 'https://picsum.photos/seed/avatar3/48/48',
    views: '12M views',
    postedAt: '1 month ago',
    duration: '24:00:00',
    description: 'Continuous lofi beats to keep you focused while you build amazing apps.'
  },
  {
    id: 'v4',
    title: 'React 19: Everything You Need to Know',
    thumbnail: 'https://picsum.photos/seed/yt4/640/360',
    channelName: 'Code Master',
    channelAvatar: 'https://picsum.photos/seed/avatar4/48/48',
    views: '45K views',
    postedAt: '12 hours ago',
    duration: '12:45',
  },
  {
    id: 'v5',
    title: 'Traveling to Japan: The Ultimate Guide 2024',
    thumbnail: 'https://picsum.photos/seed/yt5/640/360',
    channelName: 'World Explorer',
    channelAvatar: 'https://picsum.photos/seed/avatar5/48/48',
    views: '2.4M views',
    postedAt: '3 weeks ago',
    duration: '22:15',
  },
  {
    id: 'v6',
    title: 'Delicious 15-Minute Dinner Recipes',
    thumbnail: 'https://picsum.photos/seed/yt6/640/360',
    channelName: 'Cooking with Joy',
    channelAvatar: 'https://picsum.photos/seed/avatar6/48/48',
    views: '300K views',
    postedAt: '4 days ago',
    duration: '15:00',
  },
  {
    id: 'v7',
    title: 'SpaceX Starship Launch: Full Highlights',
    thumbnail: 'https://picsum.photos/seed/yt7/640/360',
    channelName: 'Space Daily',
    channelAvatar: 'https://picsum.photos/seed/avatar7/48/48',
    views: '5.1M views',
    postedAt: '1 day ago',
    duration: '08:30',
  },
  {
    id: 'v8',
    title: 'How to Master TypeScript in 30 Minutes',
    thumbnail: 'https://picsum.photos/seed/yt8/640/360',
    channelName: 'Dev Simplified',
    channelAvatar: 'https://picsum.photos/seed/avatar8/48/48',
    views: '120K views',
    postedAt: '6 days ago',
    duration: '30:00',
  }
];
