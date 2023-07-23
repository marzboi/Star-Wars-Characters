import { AppRoutes } from "../app.routes/app.routes";

import GoBack from "../goback/goback";
import Header from "../header/header";
import NavBar from "../nav.bar/nav.bar";
import styles from "./App.module.scss";

export function App() {
  return (
    <div className={styles.app}>
      <Header></Header>
      <NavBar></NavBar>
      <AppRoutes></AppRoutes>
      <GoBack></GoBack>
    </div>
  );
}
