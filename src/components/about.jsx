import { useTranslation } from "react-i18next";
import pic from "../assets/dad.jpg";
function About() {
  const {t} = useTranslation()
  return (
    <div
      id="about"
      className="bg-slate-900  text-gray-100 flex flex-col lg:flex-row md:justify-center items-center p-4"
    >
      <img
         src={pic}
       // src={"https://robohash.org/EDH.png?set=set5"}
        alt="my"
        className="rounded-full static  brightness-50 lg:w-1/4 md:w-2/3 md:mx-12"
      />
      <div className="flex flex-col items-center px-2 text-2xl text-center md:w-2/3 lg:w-1/4">
        <h2 className="text-3xl mt-4 mb-2">{t("about.title")}</h2>
        <p className=" p-2 rounded-lg">{t("about.intro")}</p>
        <a
          className="bg-emerald-700 mt-4 p-2 rounded-full border-2 border-slate-900 hover:border-gray-100"
          href="#contact"
        >
          {t("about.btnValue")}
        </a>
      </div>
    </div>
  );
}

export default About;
