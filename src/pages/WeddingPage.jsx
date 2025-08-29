import React from "react";
import Weddings from "../components/weddings/Weddings";
import PageHeader from '../components/common/PageHeader'

const WeddingPage = () => {
  return (
    <div>
        <PageHeader title="WEDDING"/>
      <Weddings />
    </div>
  );
};

export default WeddingPage;
