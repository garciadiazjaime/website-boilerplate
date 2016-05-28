/* eslint max-len: [2, 500, 4] */
import React from 'react';

import Block1 from './block1';
// import Banner2 from './banner2';
// import Block2 from './block2';
// import Block3 from './block3';
// import Block5 from './block5';
import data from './data';

export default class HomeSection extends React.Component {
  // <Banner1 data={data.banner1} />
  // <Banner2 data={data.banner1} />
  // <Block2 data={data.block2} />
  // <Block3 data={data.block3} />
  // <Block5 data={data.block5} />
  render() {
    return (<div>
      <Block1 data={data.block1} />
    </div>);
  }
}
