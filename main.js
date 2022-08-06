let weatherData;
let c=5;
let i=0,j=0;
$.get(`https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-007?Authorization=CWB-E88DB850-6029-4CA2-87BE-DB46867CAE5B&format=JSON`,function (data){
    weatherData=data;
    console.log(data);
    let city = weatherData.records.locations[0].locationsName;
    let district = weatherData.records.locations[0].location[c].locationName;
    let starttime = weatherData.records.locations[0].location[c].weatherElement[i].time[j].startTime;
    let endtime = weatherData.records.locations[0].location[c].weatherElement[i].time[j].endTime;
    let data1 = weatherData.records.locations[0].location[c].weatherElement[0].time[j].elementValue[0].value;
    let data2 = weatherData.records.locations[0].location[c].weatherElement[1].time[j].elementValue[0].value;
    let data3 = weatherData.records.locations[0].location[c].weatherElement[2].time[j].elementValue[0].value;
    let data4 = weatherData.records.locations[0].location[c].weatherElement[3].time[j].elementValue[0].value;
    let data5 = weatherData.records.locations[0].location[c].weatherElement[4].time[j].elementValue[0].value;
    let data6 = weatherData.records.locations[0].location[c].weatherElement[5].time[j].elementValue[0].value;
    let data7 = weatherData.records.locations[0].location[c].weatherElement[6].time[j].elementValue[0].value;
    let data8 = weatherData.records.locations[0].location[c].weatherElement[7].time[j].elementValue[0].value;
    let data9 = weatherData.records.locations[0].location[c].weatherElement[8].time[j].elementValue[0].value;
    let data11 = weatherData.records.locations[0].location[c].weatherElement[11].time[j].elementValue[0].value;
    let data12 = weatherData.records.locations[0].location[c].weatherElement[12].time[j].elementValue[0].value;
    let data13 = weatherData.records.locations[0].location[c].weatherElement[13].time[j].elementValue[0].value;
    let data14 = weatherData.records.locations[0].location[c].weatherElement[14].time[j].elementValue[0].value;
    $("#city").text(city);
    $("#district").text(district);
    $("#time").text("日期時間:"+starttime+"~"+endtime);
    $("#data1").text(data1+"(%)");
    $("#data2").text(data2+"(℃)");
    $("#data3").text(data3+"(%)");
    $("#data4").text(data4);
    $("#data5").text(data5+"(公尺/秒)");
    $("#data6").text(data6+"(℃)");
    $("#data7").text(data7);
    $("#data8").text(data8);
    $("#data9").text(data9+"(℃)");
    $("#data11").text(data11+"(℃)");
    $("#data12").text(data12+"(℃)");
    $("#data13").text(data13+"(16方位)");
    $("#data14").text(data14+"(℃)");
})

function showdetail(){
    if(i==13&&j==13){
        i=0;
        j=0;
    }else{
        i+=1;
        j+=1;
    }
    let city = weatherData.records.locations[0].locationsName;
    let district = weatherData.records.locations[0].location[c].locationName;
    let starttime = weatherData.records.locations[0].location[c].weatherElement[i].time[j].startTime;
    let endtime = weatherData.records.locations[0].location[c].weatherElement[i].time[j].endTime;
    let data1 = weatherData.records.locations[0].location[c].weatherElement[0].time[j].elementValue[0].value;
    let data2 = weatherData.records.locations[0].location[c].weatherElement[1].time[j].elementValue[0].value;
    let data3 = weatherData.records.locations[0].location[c].weatherElement[2].time[j].elementValue[0].value;
    let data4 = weatherData.records.locations[0].location[c].weatherElement[3].time[j].elementValue[0].value;
    let data5 = weatherData.records.locations[0].location[c].weatherElement[4].time[j].elementValue[0].value;
    let data6 = weatherData.records.locations[0].location[c].weatherElement[5].time[j].elementValue[0].value;
    let data7 = weatherData.records.locations[0].location[c].weatherElement[6].time[j].elementValue[0].value;
    let data8 = weatherData.records.locations[0].location[c].weatherElement[7].time[j].elementValue[0].value;
    let data9 = weatherData.records.locations[0].location[c].weatherElement[8].time[j].elementValue[0].value;
    let data11 = weatherData.records.locations[0].location[c].weatherElement[11].time[j].elementValue[0].value;
    let data12 = weatherData.records.locations[0].location[c].weatherElement[12].time[j].elementValue[0].value;
    let data13 = weatherData.records.locations[0].location[c].weatherElement[13].time[j].elementValue[0].value;
    let data14 = weatherData.records.locations[0].location[c].weatherElement[14].time[j].elementValue[0].value;

    $("#city").text(city);
    $("#district").text(district);
    $("#time").text("日期時間:"+starttime+"~"+endtime);
    $("#data1").text(data1+"(%)");
    $("#data2").text(data2+"(℃)");
    $("#data3").text(data3+"(%)");
    $("#data4").text(data4);
    $("#data5").text(data5+"(公尺/秒)");
    $("#data6").text(data6+"(℃)");
    $("#data7").text(data7);
    $("#data8").text(data8);
    $("#data9").text(data9+"(℃)");
    $("#data11").text(data11+"(℃)");
    $("#data12").text(data12+"(℃)");
    $("#data13").text(data13+"(16方位)");
    $("#data14").text(data14+"(℃)");
    
}

// function showarea(){
//     if(c==13){
//         c=0;
//     }else{
//         c+=1;
//     }
//     // let city = weatherData.records.locations[0].locationsName;
//     // let district = weatherData.records.locations[0].location[c].locationName;
//     // $("#city").text(city);
//     // $("#district").text(district);
    
// }

setInterval("showdetail()","2000");
// setInterval("showdarea()","26000");

