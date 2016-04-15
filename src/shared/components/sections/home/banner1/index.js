/* eslint max-len: [2, 500, 4] */
import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router';

import Carousel from '../../../elements/carousel';

const style = require('./style.scss');


export default class Block1 extends React.Component {

  renderItems(data) {
    if (_.isArray(data) && data.length) {
      return data.map((item, index) => {
        const className = index === 0 ? 'active' : '';
        const imgUrl = item.image && item.image.length ? item.image.replace('www.dropbox.com', 'dl.dropboxusercontent.com') : '/images/demo.png';
        return (<div className={'item ' + className + ' ' + (style.item || '')} key={index}>
          <div className={style.imgContainer}>
            <img itemProp="image" src={imgUrl} alt={item.description} />
            <h3 itemProp="name"><Link to={item.url} title={item.title}>{item.title}</Link></h3>
            <h4 itemProp="description" dangerouslySetInnerHTML={{ __html: item.description }} />
          </div>
        </div>);
      });
    }
    return null;
  }

  render() {
    const { data } = this.props;
    const carouselClasses = {
      inner: style.inner,
      controls: {
        base: style.controls,
        prev: style.prev,
        next: style.next,
      },
    };
    // todo: check if container-fluid do the trick
    return (<div className={style.feature}>
      <div className={style.carouselContainer + ' container-fluid'} itemScope itemType="http://schema.org/LocalBusiness">
        <Carousel id="main-carousel" interval={8000} indicators={false} classes={carouselClasses}>
          {this.renderItems(data)}
        </Carousel>
      </div>
    </div>);
  }
}

Block1.propTypes = {
  data: React.PropTypes.array.isRequired,
};