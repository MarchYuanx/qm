- Component 组件
  来自于Facebook 用搭积木的概念来类比做网站。
  我们的网页不再是由标签这个原子级别的，div+css
  由组件构成 swiper scroll-view mapview 一块积木
  具有特定的功能或表现 
  区块，功能块的calender组件，第三方

- 自定义的组件开发
  components 是MVVM框架的核心 它跟pages是平级的
  components 构成page .json文件
  {
    "usingComponents":{
      "icon":"../../components/icon/index"
      
    }
  }

  icon组件
  在应用中，会用到一些图标，字体图标
  edit add map home
  alley iconfont ttf 文件 样式
  相对独立 一个组件
  可以在多个界面复用