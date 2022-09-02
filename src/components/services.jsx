
import { useTranslation } from "react-i18next";
import Harbs from "../assets/harbs"
//import Pens from "../assets/pen";
import Pen2 from "../assets/pen2";
function Services() {
  const {t} = useTranslation()
  return (
    <div
      id="services"
      className="services bg-slate-900 text-gray-100 flex flex-col  items-center "
    >
      <h2 className="text-3xl my-4"> {t("services.maintitle")} </h2>
      <div className="flex flex-col md:flex-row lg:w-2/3">
        <div className="flex flex-col text-center text-2xl px-4 items-center mx-4 mb-4 rounded-lg bg-slate-800 ">
          <Harbs />
          <h5 className="text-2xl font-bold mb-2">
            {t("services.subtitle_1")}
          </h5>
          <p className="text-emerald-100 py-3">{t("services.body_1")}</p>
        </div>
        <div className="flex flex-col text-center text-2xl px-4 items-center mx-4 mb-4 rounded-lg bg-slate-800 ">
          <Pen2 />
          <h5 className="text-2xl font-bold mb-2">
            {t("services.subtitle_2")}
          </h5>
          <p className="text-emerald-100 py-3">{t("services.body_2")}</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
