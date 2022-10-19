import router from "./sitemap-routes";

function generateSitemap() {
  try {
    // You can also make a API call here to get the dynamic id instead of the static ones
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
      .build("https://localhost:3000", { limitCountPaths: 3 })
      .save("./public/sitemap-react.xml");
  } catch (e) {
    console.log(e);
  }
}

generateSitemap();
