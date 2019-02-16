import React from 'react';
import { Card, Carousel } from 'antd';
import '../ui.less';

export default class Carousels extends React.Component {
  render () {
    return (
      <div>
        <Card title="文字背景轮播图" className="card">
          <Carousel>
            <div><h2>Ant-Carousel React </h2></div>
            <div><h2>Ant-Carousel Vue </h2></div>
            <div><h2>Ant-Carousel Angular </h2></div>
          </Carousel>
        </Card>
        <Card title="图片背景轮播图" className="card">
          <Carousel>
            <div><img alt="" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548606830814&di=bdbb93f1b96f28d10ebbd925b1ea8c2f&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3D2f9ad0d276d98d1062d904724956d27b%2F00e93901213fb80e7aab27f93cd12f2eb93894a1.jpg"/></div>
            <div><img alt="" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548606830810&di=30aa74d17bf6c521f5652a3f9afcea46&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3Df0bb9fdbfc246b606f03ba3783917039%2F0d338744ebf81a4c1fbd2d41dd2a6059242da6af.jpg"/></div>
            <div><img alt="" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548607056107&di=1069abeba144bb54fe0a0d4eeb9ecc7f&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3Dbd77e89ae350352aa56c2d4b3b2a9187%2Fc75c10385343fbf23595410eba7eca8065388f66.jpg"/></div>
          </Carousel>
        </Card>
      </div>
    )
  }
}