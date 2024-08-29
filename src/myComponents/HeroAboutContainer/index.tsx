import { type FC } from "react";
import Typography from "@/myComponents/Typography";
import Link from "next/link";

const HeroAboutContainer: FC = () => {
  const LIST_INFORMATION = [
    {
      title: "Github",
      content: "github.com/khoiyahoo",
      href: "https://github.com/khoiyahoo",
    },
    {
      title: "Linkedin",
      content: "linkedin/in/khoidinh",
      href: "https://www.linkedin.com/in/kh%C3%B4i-%C4%91inh/",
    },
    {
      title: "Email",
      content: "khoiyahoo@gmail.com",
      href: "mailto:khoiyahoo@gmail.com",
    },
  ] as const;
  return (
    <div className="flex justify-between items-center flex-col md:flex-row pb-12 gap-8">
      <div className="w-full md:w-1/2">
        <div className="flex items-center">
          <Typography size="normal" type="bold" variant="h2">
            👨🏻‍💻 About me
          </Typography>
        </div>
        <Typography
          size="small"
          type="bold"
          variant="p"
          className="mt-2 glitch text-lg text-left"
        >
          I graduated with an engineering degree from University of Technology
          and Education, I am currently a Web Developer, my main position is
          Frontend Developer, currently I am a TEQ-er at Teqnological Asia in
          the Frontend position, I am always studying and cultivating new
          knowledge.
        </Typography>
      </div>
      <div className="w-full rounded-lg border border-orange-100 p-4 md:w-auto shadow-lg">
        <div className="flex gap-2">
          <Typography
            size="normal"
            variant="p"
            type="bold"
            className="bg-conversion-01 bg-clip-text text-transparent"
          >
            From
          </Typography>
          <Typography size="normal" variant="p" type="bold">
            Ben Tre, Viet Nam
          </Typography>
        </div>
        <div className="flex gap-2">
          <Typography
            size="normal"
            variant="p"
            type="bold"
            className="bg-conversion-01 bg-clip-text text-transparent"
          >
            Location
          </Typography>
          <Typography size="normal" variant="p" type="bold">
            Ho Chi Minh City, Viet Nam
          </Typography>
        </div>
        {LIST_INFORMATION.map((item, index) => (
          <div className="flex gap-2" key={index}>
            <Typography
              size="normal"
              variant="p"
              type="bold"
              className="bg-conversion-01 bg-clip-text text-transparent"
            >
              {item.title}
            </Typography>
            <Link
              href={item.href}
              className="hover:underline hover:underline-offset-4 hover:italic"
            >
              <Typography size="normal" variant="p" type="bold">
                {item.content}
              </Typography>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default HeroAboutContainer;
