import { useTranslation } from "react-i18next";

//import tree from '../assets/trees.jpg'
function Home() {
  const {t} = useTranslation()
    return (
      <div
        id="home"
        className=" bg-backhome  bg-no-repeat bg-cover min-h-screen  text-white"
      >
        <div className="flex bg-black w-full min-w-screen flex-col h-screen  bg-opacity-60 justify-center items-center">
          <h4 className="text-3xl text-gray-300">{t("homepage.hello")}</h4>
          <h2 className="text-3xl md:text-4xl text-center py-4 md:font-bold text-gray-100 ">
            {t("homepage.fullname.fName")}{' '}
            <span className="text-emerald-300">
              {t("homepage.fullname.lName")}
            </span>
          </h2>
          <h3 className=" text-center text-3xl text-gray-300">
            {t("homepage.intro")}
          </h3>
        </div>
      </div>
    );
}

export default Home;