import { useRouter } from "next/router";

const useScrollToSection = (sectionId: string) => {
  const router = useRouter();

  const handleClick = async () => {
    if (router.asPath !== "/") {
      await router.push("/");
    }
    const section = document.getElementById(sectionId);
    if (section) {
      setTimeout(() => {
        section.scrollIntoView({
          block: "center",
          behavior: "smooth",
        });
      }, 300);
    }
  };

  return handleClick;
};

export default useScrollToSection;
