import Links from "../components/links";
import { mainRoutes } from "../lib/constants";

const Header = () => {
  return (
    <div className="px-5 flex items-center space-x-3 md:space-x-0 md:flex-col md:space-y-3 md:justify-start md:py-10 lg:px-44 md:px-12">
      <Links links={mainRoutes} home="" />
    </div>
  );
};

export default Header;
