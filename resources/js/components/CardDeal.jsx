import { bill } from "../assets";
import styles, { layout } from "../style";
import CustomButton from "./CustomButton";


const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        The best Chama System <br className="sm:block hidden" /> and easy
        to use.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      A Digitalized System that provide coordination, transparency and efficiency in enabling streamlined operations within groups. </p>

      <CustomButton/>
    </div>

    <div className={layout.sectionImg}>
      <img src={bill} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;