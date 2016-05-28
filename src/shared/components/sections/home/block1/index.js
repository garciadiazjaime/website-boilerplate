/* eslint max-len: [2, 500, 4] */
import React from 'react';
import Carousel1 from 'lib-element-catalogue/lib/carousel/carousel1';
const style = require('./style.scss');

export default class Block1 extends React.Component {

  render() {
    const { data } = this.props;
    // const carouselClasses = {
    //   inner: style.inner,
    //   controls: {
    //     base: style.controls,
    //     prev: style.prev,
    //     next: style.next,
    //   },
    // };
    return (<div className={style.feature}>
      <div className={style.carouselContainer + ' container-fluid'}>
        <Carousel1 id="carousel-home-block1" classNames={style} data={data} />
      </div>
    </div>);
  }
}

Block1.propTypes = {
  data: React.PropTypes.array.isRequired,
};
