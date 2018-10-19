如何设计跨终端网页栅格系统，4等分(PC)，三等分(IPAD)，二等分(手机)

- Twitter Bootstrap 是自适应的前端框架，一份代码，到处运行
  在一个col上定义多个尺寸，media query
  .col-lg-n 超大 >1200px min-width
  .col-md-n 中等电脑 笔记本 >1000px 1000-1200px sm
  .col-sm-n ipad  >768  <1024
  .col-xs-n 手机  <768 max-width 767

- .container
  .row
  .col-${n}

- float 良好的兼容性