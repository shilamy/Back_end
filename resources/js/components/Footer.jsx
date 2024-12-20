import styles from "../style";
import{ footerLinks,socialMedia} from "../constants"
const Footer = () => (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex-[1] flex flex-col justify-start mr-10">
          <h1 className="font-poppins font-semibold text-primary  w-[266px] h-[72.14px] object-contain"> KR-WALLET</h1>
          <p className={`${styles.paragraph2} mt-4 max-w-[312px]`}>
            A new way to make your group operations easy, reliable and secure.
          </p>
        </div>
        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((footerlink) => (
            <div key={footerlink.key} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
              <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-seaGreen">
                {footerlink.title}
              </h4>
              <ul className="list-none mt-4">
                {footerlink.links.map((link, index) => (
                  <li key={link.name}
                    className={`font-poppins font-normal text-[16px] leading-[24px] text-seaGreen hover:text-secondary cursor-pointer
               ${index !== footerlink.links.length - 1 ?
                        'mb-4' : 'mb-0'}`}>
                    {link.name}
                  </li>
                ))}
  
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className={`${styles.flexCenter} justify-evenly bg-primary w-full flex-1 flex sm:flex-row flex-col pt-6 pb-4 rounded-[20px] box-shadow`}>
        <p className="font-poppins font-normal text-center text-[18px] leading-[20px] text-white">
          Copyright Ⓒ 2024 Shilamy_dev. All Rights Reserved.
        </p>
  
        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((social, index) => (
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              }`}
              onClick={() => window.open(social.link)}
            />
          ))}
        </div>
      </div>
    </section>
  );
  
  export default Footer;
  