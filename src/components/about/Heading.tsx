interface HeadingProps {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: React.ReactNode;
}

const Heading = ({ as: Wrapper, children }: HeadingProps) => {
  return <Wrapper className="text-lg font-medium">{children}</Wrapper>;
};

export default Heading;
