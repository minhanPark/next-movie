const Footer = () => {
  const thisYear = new Date().getFullYear();
  return (
    <div className="bg-black text-center py-4 fixed w-full bottom-0">
      <span className="text-white font-bold">
        Copyright &copy; {thisYear} RunningWater All rights reserved
      </span>
    </div>
  );
};

export default Footer;
