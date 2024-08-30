import { type FC } from "react";
import Typography from "@/myComponents/Typography";
import FormContact from "@/myComponents/FormContact";
import { CONTACT } from "@/constants/dummy";
import ItemContact from "@/myComponents/ItemContact";
const ContactSection: FC = () => {
  return (
    <section className="rounded-t-3xl xl:rounded-t-[8.5rem] pt-12" id="contact">
      <div className="container xl:px-52">
        <Typography size="normal" type="bold" variant="p">
          Contact
        </Typography>
        <Typography
          size="normal"
          type="bold"
          variant="h4"
          className="text-2xl "
        >
          🤟 Have a Project? Hire me
        </Typography>
        <div className="w-full flex flex-col items-start gap-4 mt-4">
          <div className="w-full flex flex-col">
            <Typography
              size="normal"
              type="bold"
              variant="p"
              className="text-justify"
            >
              I&apos;m open to all kinds of{" "}
              <strong className="bg-primary text-secondary">
                web programming projects
              </strong>
              . Feel free to reach out and get in touch with me for any
              collaboration or work opportunities!
            </Typography>
          </div>
          <div className="w-full flex gap-4 flex-col md:flex-row">
            <div className="w-full lg:w-1/2">
              <FormContact />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col gap-3 mt-[1.75rem] lg:mt-0">
              {CONTACT.map((item, index) => {
                const ICON = item.icon;
                return (
                  <ItemContact key={index} href={item.href} title={item.title}>
                    <ICON />
                  </ItemContact>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactSection;
