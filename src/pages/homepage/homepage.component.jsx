import React from 'react';
import './homepage.styles.scss';

import Header from '../../components/header/header.component';
// import RoboboatVideo from '../../components/roboboat-video/roboboat-video.component';
// import SeeAchievement from '../../components/see-achievement/see-achievement.component';
// import SeeMember from '../../components/see-member/see-member.component';
// import ProductOverview from '../../components/product-overview/product-overview.component';
import Footer from '../../components/footer/footer.component';
// import Sponsor from '../../components/sponsor/sponsor.component';
import Alumni from '../../components/alumni/alumni.component';

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="homepage__header">
        <Header />
      </div>
      {/* <div className="homepage__memo">
        <div className="memo">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/webamv-c51f6.appspot.com/o/memo%2Fmemo_kkctbn.jpg?alt=media&token=e7ed6148-a424-408c-a128-4178c680e00d"
            alt=""
          />
          <p>3rd Place KKCTBN 2019</p>
        </div>
        <div className="memo">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/webamv-c51f6.appspot.com/o/memo%2Fmemo_auvsi.jpg?alt=media&token=65360d08-03b1-4f75-a0c2-e4f06fdddf59"
            alt=""
          />
          <p>3rd Place AUVSI 2019</p>
        </div>
        <div className="memo">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/webamv-c51f6.appspot.com/o/memo%2Fmemo_mate.jpg?alt=media&token=db3ca7e9-80df-4475-a55f-f4b6f2e16043"
            alt=""
          />
          <p>1st Place ASEAN MATE ROV 2019</p>
        </div>
      </div> */}
      {/* <div className="homepage__see-achievement">
        <SeeAchievement />
      </div> */}
      {/* <div className="homepage__see-member">
        <SeeMember />
      </div> */}

      {/* <div className="homepage__product-overview">
        <ProductOverview />
      </div> */}
      <div className="homepage__alumni">
        <Alumni />
      </div>
      {/* <div className="homepage__sponsor">
        <Sponsor />
      </div> */}
      <div className="homepage__footer">
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
