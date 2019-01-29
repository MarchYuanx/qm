import React from 'react';
import { Card, Row, Col, Modal } from 'antd';
import '../ui.less';
import './index.less';
const { Meta } = Card;

export default class Gallery extends React.Component {
  state = {
    visible: false,
    imgs: []
  }

  // componentWillMount(){
  //   fetch('https://www.easy-mock.com/mock/5c4d8dade4522814af878461/img/img')
  //     .then(response => response.json())
  //     .then(data => this.setState({
  //       imgs:data
  //     }))
  //     .catch(error => console.log('error is', error));
  // }
  

  openImg = (src,index) =>{
    console.log(index);
    this.setState({
      visible: true,
      currentImg: src
    })
  }
  render () {
    const imgs = [
      ["https://wx4.sinaimg.cn/mw690/006gU9ttgy1fyes22qpabj30q40vadlv.jpg",
      "https://ww3.sinaimg.cn/mw690/62b509a6gw1f4cpy4ncusj20ku0rt0y5.jpg",
      "https://ww2.sinaimg.cn/mw690/006gU9ttgw1f5bxm3v58zj30qo0qon1z.jpg",
      "https://wx2.sinaimg.cn/mw690/006gU9ttgy1fut0n880ejj30y81f4e81.jpg",],
     [ "https://wx2.sinaimg.cn/mw690/006gU9ttgy1fel7kqvncij30qo0zk4b5.jpg",
      "https://wx2.sinaimg.cn/mw690/0068oDw6gy1fcmu4dm6wwj30ku0gowg4.jpg",
      "https://ww2.sinaimg.cn/mw690/006gU9ttgw1f55lg0des3j30pp12rtl9.jpg",
      "https://wx2.sinaimg.cn/mw690/006gU9ttgy1fyes2e6reuj33sd2mxe89.jpg",],
      ["https://wx2.sinaimg.cn/mw690/006gU9ttgy1fe3k69z22uj31kw2ifhdv.jpg",
      "https://wx4.sinaimg.cn/mw690/0068oDw6gy1fcmu438bb7j30ku0gqtae.jpg",
      "https://ww3.sinaimg.cn/mw690/006gU9ttgw1f41tj0waklj30qo13u119.jpg",
      "https://ww4.sinaimg.cn/mw690/0068oDw6gw1f6ktqb5t22j30rt0rtgth.jpg",],
     [ "https://ww1.sinaimg.cn/mw690/006gU9ttgw1f9beya7n8mj30qo0qo7c6.jpg",
      "https://wx3.sinaimg.cn/mw690/006gU9ttgy1fyes2g5kgdj315n1rz1kx.jpg",
      "https://wx2.sinaimg.cn/mw690/006gU9ttgy1fel7kp0qcxj30qo0zkdl1.jpg",
      "https://ww2.sinaimg.cn/mw690/6ed1a8b2jw1f3n2myluanj20qo0xbtkb.jpg",],
      ["https://ww2.sinaimg.cn/mw690/006gU9ttgw1f8xdned86yj30y81f4dse.jpg",
      "https://wx3.sinaimg.cn/mw690/0068oDw6gy1fcmu4bovssj30ku0p1dhz.jpg",
      "https://wx3.sinaimg.cn/mw690/006gU9ttgy1fe3k6lz1ulj31kw2i5hdv.jpg",
      "https://ww2.sinaimg.cn/mw690/006gU9ttjw1f20byxjr0oj30qo13utib.jpg",],
      ["https://ww3.sinaimg.cn/mw690/006gU9ttgw1fafzk4h109j30y81f4avr.jpg",
      "https://ww4.sinaimg.cn/mw690/006gU9ttgw1f9jjdzbp87j30h80h80yb.jpg",
      "https://ww3.sinaimg.cn/mw690/006gU9ttjw1f20bzcsnu6j30qo13udqo.jpg",
      "https://ww4.sinaimg.cn/mw690/006gU9ttgw1f93hu7qcq7j30y81f4dr6.jpg"],
    ]

    const imgsCard = imgs.map((list,indexA )=> list.map((item,indexB) =>
      <Card 
        cover={<img alt="@张馨怡_fish" src={item} />} 
        className="card" 
        key={(indexA+1)+"."+(indexB+1)}
        onClick={()=>this.openImg(item,(indexA+1)+"."+(indexB+1))}
        >
        <Meta   
          title="Photography"
          description="@张馨怡_fish"
        />
      </Card>
      ))
    
    return (
      <div>
        <Row gutter={12}>
          <Col span={4}>
            {imgsCard[0]}
          </Col>
          <Col span={4}>
           {imgsCard[1]} 
          </Col>
          <Col span={4}>
            {imgsCard[2]}
          </Col>
          <Col span={4}>
           {imgsCard[3]}
          </Col>
          <Col span={4}>
           {imgsCard[4]}
          </Col>
          <Col span={4}>
           {imgsCard[5]}
          </Col>
        </Row>
        <Modal
          title="图片"
          visible={this.state.visible}
          footer={null}
          onCancel={()=>this.setState({
            visible: false
          })}
        >
          {<img alt="" src={this.state.currentImg} style={{width:'100%'}}/>} 
        </Modal>
      </div>
    )
  }
}