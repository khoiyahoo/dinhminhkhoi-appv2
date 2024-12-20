import { type ReactNode, type FC } from "react";

interface Props {
  children: ReactNode;
}
const HeroSection: FC<Props> = ({ children }) => {
  return (
    <section className="mt-10 mb-10">
      <div className="container xl:px-52">{children}</div>
    </section>
  );
};
export default HeroSection;
