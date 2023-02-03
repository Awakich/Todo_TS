
interface ChildrenProp {
  children: React.ReactNode
}

const Layout: React.FC<ChildrenProp> = ({ children }) => {
  return <div className="px-12 py-6 bg-[#F3AA4E] min-h-screen">{children}</div>;
};

export default Layout;
