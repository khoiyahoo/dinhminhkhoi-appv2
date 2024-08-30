import { type FC } from "react";
import Typography from "@/myComponents/Typography";
import ServiceCard from "@/myComponents/ServiceCard";
import { SUMMARY_SERVICE } from "@/constants/dummy";

const ServiceSection: FC = () => {
  return (
    <section className="pt-12">
      <div className="container xl:px-52">
        <Typography size="normal" type="bold" variant="p">
          Services
        </Typography>
        <Typography
          size="normal"
          type="bold"
          variant="h4"
          className="text-2xl "
        >
          ✏️ I am grat at
        </Typography>
        <div className="w-full flex flex-col items-start gap-4 mt-4">
          <div className="w-full flex flex-col">
            <Typography
              size="normal"
              type="bold"
              variant="p"
              className="text-justify"
            >
              💡 We do awesome services for our clients
            </Typography>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 lg:gap-4 gap-14 auto-cols-fr mt-14">
            {SUMMARY_SERVICE.map((item, index) => (
              <ServiceCard
                key={index}
                title={item.title}
                subTitle={item.subtitle}
                src={item.src}
                classNames={item.boxShadow}
                classNamesIcon={item.boxShadow}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default ServiceSection;
