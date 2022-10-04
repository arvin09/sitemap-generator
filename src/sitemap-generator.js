require("babel-register")({
    presets: ["es2015", "react"]
  });
   
  const router = require("./sitemap-routes").default;
  const Sitemap = require("react-router-sitemap").default;
  
  async function generateSitemap() {
    try {

    const idMap = [{id: "0001"}, {id: "0002"}, {id: "0003"}, {id: "0004"}, {id: "0005"}]
  
      const paramsConfig = {
        "/page/:id": idMap
      };
  
      return (
        new Sitemap(router)
            .applyParams(paramsConfig)
            .build("https://www.example.com")
            .save("./public/sitemap-react.xml")
      );
    } catch(e) {
      console.log(e);
    } 
  }
  
  generateSitemap();