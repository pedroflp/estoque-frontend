import { Helmet } from "react-helmet";
import CardSection from "../components/CardSection";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";


import '../styles/pages/MainPage.css';


export default function MainPage() {

  return (
    <div className='mainpage-container'>
      <Helmet title="StockAPP | Estoque" />
      <SideBar />
      
      <div className='mainpage-center-content'>
        <TopBar />

        <CardSection />
      </div>
    </div>
  );
}