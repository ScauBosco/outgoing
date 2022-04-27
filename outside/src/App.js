// import pic1 from "./asset/img/1.jpg";
// import pic2 from "./asset/img/2.jpg";
// import pic3 from "./asset/img/3.jpg";
// import pic4 from "./asset/img/4.jpg";
import { useState } from "react";
import "./App.css";

function App() {
  const [showlist, setShowlist] = useState(false);
  const [iswaichu, setIswaichu] = useState(false);
  function getTime() {
    var dateObj = new Date();

    var year = dateObj.getFullYear(); //年
    var month = dateObj.getMonth() + 1; //月  (注意：月份+1)
    var date = dateObj.getDate(); //日
    // var day = dateObj.getDay();
    // var weeks = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
    // var week = weeks[day]; //根据day值，获取星期数组中的星期数。
    var hours = dateObj.getHours(); //小时
    var minutes = dateObj.getMinutes(); //分钟
    var seconds = dateObj.getSeconds(); //秒

    if (month < 10) {
      month = "0" + month;
    }
    if (date < 10) {
      date = "0" + date;
    }
    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    var newDate =
      year +
      "-" +
      month +
      "-" +
      date +
      "&nbsp" +
      hours +
      ":" +
      minutes +
      ":" +
      seconds;
    document.getElementById("date1").innerHTML = newDate; //在div中写入时间
    setTimeout(getTime, 500); //每隔500ms执行一次getTime()
  }

  function getTime1() {
    getTime();
    var dateObj1 = new Date();

    var year = dateObj1.getFullYear(); //年
    var month = dateObj1.getMonth() + 1; //月  (注意：月份+1)
    var date = dateObj1.getDate(); //日
    var date2 = date + 2; //日
    // var day = dateObj1.getDay();
    // var weeks = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
    // var week = weeks[day]; //根据day值，获取星期数组中的星期数。
    var hours = dateObj1.getHours(); //小时
    var hours2 = hours - 1; //小时
    var minutes = dateObj1.getMinutes(); //分钟
    var seconds = dateObj1.getSeconds(); //秒

    if (month < 10) {
      month = "0" + month;
    }
    if (date < 10) {
      date = "0" + date;
    }
    if (date2 < 10) {
      date2 = "0" + date2;
    }
    if (hours2 === -1) {
      hours2 = 23;
    }
    if (hours < 10) {
      hours = "0" + hours;
      hours2 = "0" + hours2;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    var newDate2 =
      year +
      "-" +
      month +
      "-" +
      date +
      "&nbsp" +
      hours2 +
      ":" +
      minutes +
      ":" +
      seconds;
    var newDate3 =
      year +
      "-" +
      month +
      "-" +
      date2 +
      "&nbsp" +
      hours +
      ":" +
      minutes +
      ":" +
      seconds;
    document.getElementById("date2").innerHTML = "150"; //在div中写入时间
    document.getElementById("date3").innerHTML = "2112114040"; //在div中写入时间
    document.getElementById("date2").innerHTML = newDate2; //在div中写入时间
    document.getElementById("date3").innerHTML = newDate3; //在div中写入时间
  }
  return (
    <div className="App">
      {!iswaichu && (
        <>
          <div className="layout-bottom">
            <div className="ibottom">
              <div className="bsize b1" />
              <div
                className="bsize b2"
                onClick={() => setShowlist(!showlist)}
              />
              <div className="bsize b3" />
              <div className="bsize b4" />
            </div>
          </div>
          <div className="zhanwei" />
          <div className="zhanwei" />
          <div className="zhanwei" />
          <div className="zhanwei" />
          <div className="zhanwei" />
          <div className="zhanwei" />
        </>
      )}
      {showlist && (
        <div className="layout-pop">
          <div>勤工助学</div>
          <div>学风督导</div>
          <div
            onClick={() => {
              setShowlist(false)
              setIswaichu(true);
              getTime1();
            }}
          >
            学生外出登记
          </div>
          <div>疫苗接种登记</div>
          <div>0424疫苗接种预约</div>
        </div>
      )}
      {iswaichu && (
        <div onClick={()=>getTime1()}>
          <div id="date1" class="bgc_w height100 middlediv">
            时间
          </div>
          <div class="bgc_g middlediv dimg">
            <img
              src="https://s2.loli.net/2021/12/07/m5fLGNWpOdXyMCY.png"
              height="130px"
              width="130px"
              alt=""
            />
          </div>
          <div class="dfontsize">
            <div>
              <h5 class="bgc_g fontgrey">外出时间</h5>
              <div class="bgc_w">
                <div class="dflex">
                  <div>离校时间</div>
                  <div id="date2"></div>
                </div>
                <div class="dflex">
                  <div>回校时间</div>
                  <div id="date3"></div>
                </div>
              </div>
            </div>
            <div>
              <h5 class="bgc_g fontgrey">学生信息</h5>
              <div class="bgc_w">
                <div class="height15">
                  <div>姓名</div>
                  <div class="fontgrey">黄嘉诚</div>
                </div>
                <div class="height15">
                  <div>学号</div>
                  <div class="fontgrey">2112114060</div>
                </div>
                <div class="height15">
                  <div>学院</div>
                  <div class="fontgrey">应用数学学院</div>
                </div>
                <div class="height15">
                  <div>专业</div>
                  <div class="fontgrey">电子信息</div>
                </div>
                <div class="height15">
                  <div>班级</div>
                  <div class="fontgrey">21数学专硕</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
