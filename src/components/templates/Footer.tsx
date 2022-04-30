import { useContext } from "react";
import styles from "../UI/modules/Footer.module.css";
import { ThemeContext } from "./Main";
import { MainTheme } from "./MainTheme";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { theme } = useContext(ThemeContext);
  const headerStyle: MainTheme = {
    dark: {
      backgroundColor: "black",
      color: "white",
    },
    light: {
      backgroundColor: "lightgray",
      color: "black",
    },
    common: {
      transition: "all is ease",
    },
  };

  const themeStyle = {
    ...headerStyle.common,
    ...(theme === "light" ? headerStyle.light : headerStyle.dark),
  };
  return (
    <footer style={themeStyle} className={styles.footer}>
      <div className="container">
        <p className="text-muted">
          © {currentYear}, OneLab. All rights reserved
        </p>
        <p></p>
        <p className={styles.created}>Created with love by Ali and Shyngys</p>
      </div>
    </footer>
  );
};
