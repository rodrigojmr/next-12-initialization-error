import "@fontsource/montserrat";
import "@fontsource/montserrat/300.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";
import { tw } from "twind";

import { globalBg } from "@styles/theme";

function Layout({ children }) {
  return (
    <div className={tw`min-h-full ${globalBg}`}>
      <main>{children}</main>
    </div>
  );
}

export default Layout;
