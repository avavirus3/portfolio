import i18next  from "i18next";
import i18n from 'i18next'
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { Suspense, useEffect,useState } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Services from "./components/services";
import Contacts from "./components/contacts";
import { languages} from "./assets/lang";

i18next
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)

  .init({
    supportedLngs: ["en", "ar"],
    fallbackLng: "en",
    debug: false,
    detection: {
      order: [
        "navigator",
        "querystring",
        "cookie",
        "localStorage",
        "sessionStorage",
        "path",
        "htmlTag",
        "subdomain",
      ],
    },
    // resources:{
    //   en : en,
    //   ar : ar,
    // },
    backend: {
      loadPath: "/assets/{{lng}}/translation.json",
    },
  });
  //const currentLanguageCode = get("i18next") || "en";
  //  const currentLanguage = languages.find(
  //    (l) => l.code === currentLanguageCode
  //  );
  
  
 
 

 
  
   
  function App() {
    
    const [current,setCurernt] = useState(i18n.language);
    const changelang=(val)=>{
      setCurernt(val)
      i18next.changeLanguage(val)
    }
    useEffect(()=>{
      document.body.dir = languages.find(lang=>lang.code === current).dir
      },[current])  
  return (
    <Suspense fallback="loadiing..">
      <NavBar />

      <Home />
      <About />

      <Services />
      <Contacts langs={languages} handleLang={changelang}/>
     
    </Suspense>
  );
}

export default App;
