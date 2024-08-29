import { type FC } from "react";
import Typography from "@/myComponents/Typography";
const Footer: FC = () => {
  return (
    <footer className="w-full h-10 border-t-4 border-secondary mt-8">
      <div className="container py-2  flex justify-center items-center">
        <Typography size="small" type="bold" variant="p">
          Copyright ©2024 All rights reserved | This website is made with by me
          | ⚽️ Soccer | 🚌 Travel
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
