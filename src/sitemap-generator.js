import router from "./sitemap-routes";
import Sitemap, { pathsSplitter } from "react-router-sitemap";

async function generateSitemap() {
  try {
    const idMap = [
      { id: "0001" },
      { id: "0002" },
      { id: "0003" },
      { id: "0004" },
      { id: "0005" },
    ];

    const paramsConfig = {
      "/page/:id": idMap,
    };

    return new Sitemap(router)
      .applyParams(paramsConfig)
      .build("https://localhost:3000", {limitCountPaths:3})
      .save("./public/sitemap-react.xml");
  } catch (e) {
    console.log(e);
  }
}

generateSitemap();
