import { DetailCard, DetailCard2, ProductDemoCard3 } from "./Card"
import "./LandingPage.css";
import { TopWebShoesImg } from "./Images"
import { Layout } from "./Layout"

export const LandingPage =()=>{
    return ( <Layout>
        <TopWebShoesImg/>
        <div className="detain-card-in-landing-page">
        <DetailCard/>
        <DetailCard2/>
        </div>
      
    </Layout>
)}