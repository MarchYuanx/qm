import { loadNotes } from '../../utils/util'

let col1H = 0,col2H = 0;

Page({
  data: {
    col1: [],
    col2: [],
    page: 1,
    imgWidth: 0, //轨道的宽度 , 图片显示时的宽度6
    notes: [] ,//数据
    images: [],
    loadingCount: 0
  },
  onLoad(){
    // 1. 设备宽度信息
    // 2. loadNotes 依赖于 1 height
    wx.getSystemInfo({
      success: (res) => {
        
        let ww = res.windowWidth;
        let wh = res.windowHeight;
        let imgWidth = ww * 0.465;
       
        this.setData({
          imgWidth: imgWidth
        }),

        (()=>{
          console.log('可以去取数据了');
          loadNotes(this.addNotes);
        })();
    }
    })
  },
  addNotes(res){
    const total = res.total;
    let notes = res.data;
    console.log(total,notes);
    // notes height 0
    notes = notes.map(note => {
      return {
        height: 0,
        ...note
      }
    });
    const images = notes.map(note => {
      return {
        pic : note.pic,
        id: note._id
      }
    });

    console.log(images);

    this.setData({
      total,
      notes,
      images,
      loadingCount: notes.length
    });
    
  },
  onImageLoad (e){
    console.log("on-img ");

    const imageId  = e.currentTarget.dataset.id;
    let oImgW = e.detail.width;
    let oImgH = e.detail.height;


    let imgWidth = this.data.imgWidth;
    let imgHeight = oImgH * (imgWidth/oImgW)

    console.log(imgWidth,imgHeight);

    let notes = this.data.notes;
    let noteObj = null;
    for (let note of notes){
      if(note._id === imageId){
        noteObj = note;
        break;
      }
    }
    noteObj.height = imgHeight;

    let loadingCount = this.data.loadingCount - 1;
    let col1 = this.data.col1;
    let col2 = this.data.col2;

    if (col1H <= col2H) {
      col1H += imgHeight;
      col1.push(noteObj);
    } else {
      col2H += imgHeight;
      col2.push(noteObj);
    }
    
    this.setData({
      loadingCount,
      col1,
      col2
    })





  },
  lower(){
    this.data.page ++;
    loadNotes(this.addNotes,this.data.page)
  },
  upper(){
    this.data.page ;
    loadNotes(this.addNotes,this.data.page)
  }
})