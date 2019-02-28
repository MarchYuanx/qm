export default {
  formateTime: (time)=>{
  if(!time) return ' '
  
  let date = new Date(time);
  let year = date.getFullYear();
  let month = (date.getMonth()+1);
  let day = date.getDate();  
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();

  if(month<10) month = '0' + month;
  if(day<10) day = '0' + day;
  if(hour<10) hour = '0' + hour;
  if(minute<10) minute = '0' + minute;
  if(second<10) second = '0' + second;

  return year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
  },
  pagination: (data, callback)=>{
    console.log('[page]',data.result.page)
    console.log('[page_size]',data.result.page_size)
    console.log('[total]',data.result.total)
    return {
      onChange: (current)=>{
        callback(current)
      },  
      current: data.result.page,
      pageSize: data.result.page_size,
      total: data.result.total,
      showTotal:()=>{
        return `共${data.result.total}条数据`
      },
      //showQuickJumper: true
    }
  }

}