import { Suspense } from 'react';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';
import { getQueryClient, trpc } from '@/trpc/server';
import { ClientGreeting } from './client-greating';

const HomePage = async () => {
  const queryClient = getQueryClient();

  void queryClient.prefetchQuery(trpc.hello.queryOptions({ text: 'world' }));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <Suspense fallback={<div>Loading...</div>}>
          <ClientGreeting />
        </Suspense>
      </ErrorBoundary>
    </HydrationBoundary>
  );
};

export default HomePage;
