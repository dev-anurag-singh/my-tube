interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return <div className='grid h-screen place-content-center'>{children}</div>;
};

export default Layout;
