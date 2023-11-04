import Showcase from '../assets/images/banner.png';
import { NavBar, BestSeller } from '../components';
export const Hero = () => {
  return (
    <main>
      <img
        src={Showcase}
        alt=""
        className="self-center w-full		"
      />

      <div>
        <BestSeller />
      </div>
    </main>
  );
};
