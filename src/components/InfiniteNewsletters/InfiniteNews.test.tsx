'use client';

import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import InfiniteNewsletters from './InfiniteNewsletters';  
import { useInfiniteNewsletters } from '@/hooks/useInfiniteNewsletters';
import { useInView } from 'react-intersection-observer';
import { UserWithSubscriptions } from '@/types/user';

const mockUser: UserWithSubscriptions = {
    id: 'user1',
    firstName: 'John',
    lastName: 'Doe',
    gender: 'M',
    email: 'john.doe@example.com',
    subscriptions: []
};

const newsletters = [
    {
        id: 'newsletter1',
        title: 'Newsletter 1',
        imageUrl: 'https://example.com/newsletter1.jpg',   
        subscriptions: [],
    },
    {
        id: 'newsletter2',
        title: 'Newsletter 2',
        imageUrl: 'https://example.com/newsletter2.jpg',   
        subscriptions: [],
    },
];


jest.mock('@/hooks/useInfiniteNewsletters');
jest.mock('react-intersection-observer', () => ({
    useInView: jest.fn(),
}));

describe('InfiniteNewsletters component', () => {

  beforeEach(() => {
    (useInfiniteNewsletters as jest.Mock).mockReturnValue({
      data: newsletters,  
      fetchNextPage: jest.fn(),
      hasNextPage: true,
      isFetchingNextPage: false,
      status: 'success',
    });

    (useInView as jest.Mock).mockReturnValue({
      ref: jest.fn(),
      inView: true,
    });
  });

  it('should render loading message when status is pending', () => {
     (useInfiniteNewsletters as jest.Mock).mockReturnValue({
      status: 'pending',
    });

    render(<InfiniteNewsletters user={mockUser} />);

    expect(screen.getByText(/Chargement....$/)).toBeInTheDocument();
  });

  it('should render error message when status is error', () => {
     (useInfiniteNewsletters as jest.Mock).mockReturnValue({
      status: 'error',
    });

    render(<InfiniteNewsletters user={mockUser} />);
    expect(screen.getByText(/An error occured./)).toBeInTheDocument();
  });

  it('should render no newsletters available message if no data', () => {
     (useInfiniteNewsletters as jest.Mock).mockReturnValue({
      data: [],
      status: 'success',
    });

    render(<InfiniteNewsletters user={mockUser} />);
    expect(screen.getByText(/No newsletters available./)).toBeInTheDocument();
  });
});
