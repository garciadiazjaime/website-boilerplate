/* eslint max-len: [2, 500, 4] */
import React from 'react';

// import Banner1 from './banner1';
// import Banner2 from './banner2';
// import Block2 from './block2';
// import Block3 from './block3';
// import Block5 from './block5';
const styleBlock1 = require('./banner1/style.scss');
import data from './data';
import Carousel1 from 'lib-element-catalogue/build/carousel/carousel1';

export default class HomeSection extends React.Component {
  // <Banner1 data={data.banner1} />
  // <Banner2 data={data.banner1} />
  // <Block2 data={data.block2} />
  // <Block3 data={data.block3} />
  // <Block5 data={data.block5} />
  render() {
    return (<div>
      <Carousel1 style={styleBlock1} data={data.banner1} />
    </div>);
  }
}
