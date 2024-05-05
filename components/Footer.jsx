import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className="bg-secondary py-12 ">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between ">
          {/* social links */}
          <Socials
            containerStyles={"flex gap-x-6 mx-auto mb-4 "}
            iconsStyles={
              "text-black/70 hover:text-primary dark:text-white/70 dark:hover:text-primary text-[20px] "
            }
          />
          {/* copyright text */}
          <div className="text-muted-foreground">
            Copyright &copy; Dani Ramdani. All right reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
