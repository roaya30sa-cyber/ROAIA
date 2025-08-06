import type { ReactNode } from 'react';

export interface NavLink {
  label: string;
  path: string;
}

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface WhyChooseUsItem {
    title: string;
    description: string;
    icon: React.ReactNode;
}

export interface SuccessStory {
  client: string;
  challenge: string;
  result: string;
  imageUrl: string;
}

export interface BlogPost {
  title: string;
  excerpt: string;
  imageUrl: string;
  date: string;
  author: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
