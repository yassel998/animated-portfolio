import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Yassines Portfolio
        </motion.span>
        <div className="social">
          <a
            href="https://www.linkedin.com/in/yassine-el-aissati-47ab70142/"
            target="_blank"
          >
            <img src="/linkedin.png" alt="" />
          </a>
          <a href="https://github.com/yassel998" target="_blank">
            <img src="/github.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
