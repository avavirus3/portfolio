import { useTranslation } from "react-i18next";
import {languages} from '../assets/lang';
function Contacts({langs , handleLang}) {
  const { t } = useTranslation();

  return (
    <div id="contact" className="bg-slate-900 md:text-center justify-center">
      <div className="text-gray-100 text-2xl  text-center font-bold pt-2">
        {t("homepage.fullname.fName") + "  " + t("homepage.fullname.lName")}
      </div>

      <div className="text-gray-100   text-center pb-1">
        {t("contacts.intro")}
      </div>
      <div className="flex justify-evenly mx-auto md:w-2/3 text-white  py-3">
        <a href="https://www.facebook.com/profile.php?id=100007878121671">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="hover:bg-white hover:text-black rounded-full w-12"
          >
            <path
              d="M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50977H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50977H7.19795L6.80206 13.4901H9.19795V21.5Z"
              fill="currentColor"
            />
          </svg>
        </a>
        <a href="https://wa.me/251911764879">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            className="hover:bg-white hover:text-black rounded-full w-12"
          >
            <path
              d="M18.403 5.633A8.919 8.919 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a8.981 8.981 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.926 8.926 0 0 0-2.627-6.35m-6.35 13.812h-.003a7.446 7.446 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.448 7.448 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.413 7.413 0 0 1 5.275 2.188 7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73-.205-.075-.354-.112-.504.112s-.58.729-.711.879-.262.168-.486.056-.947-.349-1.804-1.113c-.667-.595-1.117-1.329-1.248-1.554s-.014-.346.099-.458c.101-.1.224-.262.336-.393.112-.131.149-.224.224-.374s.038-.281-.019-.393c-.056-.113-.505-1.217-.692-1.666-.181-.435-.366-.377-.504-.383a9.65 9.65 0 0 0-.429-.008.826.826 0 0 0-.599.28c-.206.225-.785.767-.785 1.871s.804 2.171.916 2.321c.112.15 1.582 2.415 3.832 3.387.536.231.954.369 1.279.473.537.171 1.026.146 1.413.089.431-.064 1.327-.542 1.514-1.066.187-.524.187-.973.131-1.067-.056-.094-.207-.151-.43-.263"
              fill="currentColor"
            />
          </svg>
        </a>
        <a href="https://t.me/+RJuMU3GH-wE5Y2Nk">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            className="hover:bg-white hover:text-black rounded-full w-12"
          >
            <path
              d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"
              fill="currentColor"
            />
          </svg>
        </a>
      </div>
      <div className="text-emerald-300 text-center pb-2 text-lg">
        © copyright by Ahmed{" "}
        <>
          {langs.map((item) => {
            return (
              <button key={item.code}
                className="text-white px-2"
                onClick={() => {
                  handleLang(item.code);
                }}
              >
                {item.name}{" "}
              </button>
            );
          })}{" "}
        </>
      </div>
    </div>
  );
}

export default Contacts;
