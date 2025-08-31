import React, { useEffect } from "react";
import Weddings from "../components/weddings/Weddings";
import PageHeader from '../components/common/PageHeader'

const WeddingPage = () => {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[]);
  return (
    <div>
        <PageHeader title="WEDDING"/>
      <Weddings />
    </div>
  );
};

export default WeddingPage;
