import Slider from "@/component/swiper_slider/slider";
import Header from "../component/header/header";
import Category from "@/component/Category/category";
import BestSell from "@/component/bestsel/bestSel";
import AsalBaner from "@/component/asalbaner/asalBaner";
import Latest from "@/component/latest/latest";
import Details from "@/component/details/details";
import SpringHony from "@/component/springHony/springHony";
import Article from "@/component/Article/Article";
import Footer from "@/component/footer/footer";
// import './globals.css';
export default function Home() {
  return (
    <div className="w-screen h-screen  " >
      {/* <Header/> */}
      <Slider />
      <Category />
      <BestSell />
      <AsalBaner/>
      <Latest/>
      <Details/>
      <SpringHony/>
      <Article/>
      <Footer/>
    </div>
  );
}
