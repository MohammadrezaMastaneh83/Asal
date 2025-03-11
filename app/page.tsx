import Slider from "@/compponent/swiper_slider/slider";
import Category from "@/compponent/Category/category";
import BestSell from "@/compponent/bestsel/bestSel";
import AsalBaner from "@/compponent/asalbaner/asalBaner";
import Latest from "@/compponent/latest/latest";
import Details from "@/compponent/details/details";
import SpringHony from "@/compponent/springHony/springHony";
import Article from "@/compponent/Article/Article";
import Footer from "@/compponent/footer/footer";
import Header from "@/compponent/header/header";
// import './globals.css';
export default function Home() {
  return (
    <div className="w-screen h-screen  ">
     
      <Slider />
      <Category />
      <BestSell />
      <AsalBaner />
      <Latest />
      <Details />
      <SpringHony />
      <Article />
      <Footer />
    </div>
  );
}
