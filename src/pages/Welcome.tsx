import MyCarousel from "../components/MyCarousel";
import RiceCategories from "./Product/rice-categories";

const Welcome = () => {
  return (
    <div className="p-4">
      <MyCarousel />
      <RiceCategories />
      {/* <RiceProducts /> */}
    </div>
  );
};

export default Welcome;
