"use client";
import Link from "next/link";
import { FaGithub, FaYoutube } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { ProjectDetailsTabs } from "../../../../lib/constants";
import { useState } from "react";
import Carousal from "../../../../components/slider/carousal";
import { motion } from "framer-motion";

type Props = {
  data: ProjectType;
};

const Content = ({
  data: { name, description, repo, site, youtube, slide },
}: Props) => {
  const [activeTab, setActiveTab] = useState<string>("description");
  return (
    <div className="">
      <div className="p-5 flex items-center space-x-2">
        {ProjectDetailsTabs.map((tab) => (
          <div
            key={tab}
            onClick={() => setActiveTab(tab.toLowerCase())}
            className={`text-slate-400 ${
              tab.toLowerCase() === activeTab && "bg-[#161B22]"
            } hover:bg-[#161B22]   relative cursor-pointer  transition-all duration-150 hover:scale-110 rounded-md font-medium text-xs flex items-center py-0.5 px-2`}
          >
            {tab}
          </div>
        ))}
      </div>
      {activeTab === "description" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full md:max-w-lg"
        >
          <h2 className="text-lg font-bold">{name}</h2>
          <p className="text-xs md:text-sm mt-5">{description}</p>
          <div className="flex flex-row space-x-4 mt-5">
            {repo && (
              <Link href={repo} target="_blank" className="projectDetailsLink">
                <FaGithub className="w-5 h-5" />
                <p>Repo</p>
              </Link>
            )}
            {site && (
              <Link href={site} target="_blank" className="projectDetailsLink">
                <CgWebsite className="w-5 h-5" />
                <p>Live demo</p>
              </Link>
            )}
            {youtube && (
              <Link
                href={youtube}
                target="_blank"
                className="projectDetailsLink"
              >
                <FaYoutube className="w-5 h-5" />
                <p>Video</p>
              </Link>
            )}
          </div>
        </motion.div>
      )}
      {activeTab === "screenshots" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="px-2 w-full lg:max-w-2xl md:max-w-lg "
        >
          {" "}
          <Carousal slides={slide} />
        </motion.div>
      )}
      {activeTab === "technologies" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          gg
        </motion.div>
      )}
    </div>
  );
};

export default Content;
