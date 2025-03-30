'use client';
// <-- hooks can only be used in client components
import { useSuspenseQuery } from '@tanstack/react-query';
import { useTRPC } from '@/trpc/client';
export function ClientGreeting() {
  const trpc = useTRPC();
  const greeting = useSuspenseQuery(trpc.hello.queryOptions({ text: 'world' }));

  return <div>{greeting.data.greeting}</div>;
}
