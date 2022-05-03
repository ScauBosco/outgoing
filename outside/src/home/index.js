import { useState } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [showlist, setShowlist] = useState(false);
  const navigate = useNavigate();
  //   const [iswaichu, setIswaichu] = useState(false);

  //   const info2 = [
  //     ["黄嘉诚", "2112114060", "应用数学学院", "电子信息", "21数学专硕"][
  //       ("张智云", "2112114062", "应用数学学院", "电子信息", "21数学专硕")
  //     ][("王泽仁", "2112114063", "应用数学学院", "电子信息", "21数学专硕")][
  //       ("曾远辉", "2112114060", "应用数学学院", "电子信息", "21数学专硕")
  //     ],
  //   ];

  return (
    <div className="Home">
      <>
        <div className="layout-bottom">
          <div className="ibottom">
            <div className="bsize b1" />
            <div className="bsize b2" onClick={() => setShowlist(!showlist)} />
            <div className="bsize b3" />
            <div className="bsize b4" />
          </div>
        </div>
        <div className="zhanwei" />
        <div className="zhanwei" />
        <div className="zhanwei" />
        <div className="zhanwei" />
        <div className="zhanwei" />
        <div className="zhanwei" style={{
            "marginBottom":'50px'
        }}/>
      </>

      {showlist && (
        <div className="layout-pop">
          <div><a href="www.baidu.com">勤工助学</a></div>
          <div>学风督导</div>
          <div
            onClick={() => {
              setShowlist(false);
              navigate("/waichu");
            }}
          >
            学生外出登记
          </div>
          <div>疫苗接种登记</div>
          <div>0424疫苗接种预约</div>
        </div>
      )}
    </div>
  );
}
