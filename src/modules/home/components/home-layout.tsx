import { SidebarProvider } from '@/components/ui/sidebar';
import { HomeNavbar } from './home-navbar';
import { HomeSidebar } from './home-sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

export const HomeLayout = ({ children }: LayoutProps) => {
  return (
    <SidebarProvider>
      <div className='w-full'>
        <HomeNavbar />
        <div className='flex min-h-screen pt-16'>
          <HomeSidebar />
          <main className='flex-1 overflow-y-auto'>{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
};
