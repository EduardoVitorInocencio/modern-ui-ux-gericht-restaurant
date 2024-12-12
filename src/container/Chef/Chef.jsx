import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word"/>
      <h1 className='headtext__cormorant'>What We Belive In</h1>

      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt="quote" />
          <p className='p__opensans'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          </p>
        </div>
        <p className='p__opensans'>
          Suspendisse eleifend tellus massa, ac tempor diam iaculis posuere. Aenean arcu elit, rutrum sed massa et, fringilla dictum velit. Sed tincidunt diam at dui tincidunt pulvinar. Vivamus aliquet diam eget massa ullamcorper luctus. Quisque porttitor risus faucibus neque tincidunt lobortis a sed enim. Sed ornare libero in congue laoreet. Mauris ullamcorper ut diam non lobortis. Donec hendrerit mattis tellus, aliquet tempor nibh. Phasellus aliquet iaculis nisl id accumsan. Fusce laoreet pharetra ipsum, sed mollis ante congue id. Quisque luctus ante vel porta mattis.
        </p>
      </div>

      <div className='app__chef-sign'>
        <p>Kevin Luo</p>
        <p className='p__opensans'>Chef & Founder</p>
        <img src={images.sign} alt="signature" />
      </div>
    </div>
  </div>
);

export default Chef;
