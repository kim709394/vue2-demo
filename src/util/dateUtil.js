//时间戳转时间字符串格式
let timestampToDateStr =function (timestamp){
    if(timestamp == null ||timestamp==0||timestamp==undefined||timestamp==""){
        return "";
    }
    var date=new Date(timestamp);
    var year=date.getFullYear();
    var mon = date.getMonth()+1;
    var day = date.getDate();
    var hours = date.getHours();
    var minu = date.getMinutes();
    var sec = date.getSeconds();
    return year+"-"+mon+"-"+day+" "+hours+":"+minu+":"+sec;
}
//时间字符串转时间戳
let dateStrToTimestamp =function (dateStr){
    if(dateStr == null || dateStr == "" || dateStr == undefined){
        return null;
    }
    return new Date(dateStr).getTime();
}
export {timestampToDateStr,dateStrToTimestamp}