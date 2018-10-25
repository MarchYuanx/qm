const app = getApp()

Page({
    data:{
        stories:[],
        currentVid:null,
        currentVideo:null
    },
    onLoad(options){
        this.setData({
            stories:app.globalData.stories
        })
        console.log('stories---page---load');

    },
    onReady:function(){
        
    },
    play(event){
        if(this.data.currentVideo !== null){
            this.data.currentVideo.pause();
        }

        const vid = event.currentTarget.dataset.vid;
        const currentVideo = wx.createVideoContext(`${vid}`);
        currentVideo.play();
        this.setData({
            currentVid: vid,
            currentVideo,
        })
    }
});