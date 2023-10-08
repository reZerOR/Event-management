import Banner from "../../Components/Banner/Banner";
import Cards from "../../Components/Cards/Cards";
import Footer from "../../Components/Footer/Footer";
import Review from "../../Components/Review/Review";
import WhyUs from "../../Components/WhyUs/WhyUs";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Cards></Cards>
      <WhyUs></WhyUs>
      <Review></Review>
      <Footer></Footer>
    </div>
  );
};

export default Home;
