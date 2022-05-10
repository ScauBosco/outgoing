import { useState } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [showlist, setShowlist] = useState(false);
  
  const navigate = useNavigate();
  //   const [iswaichu, setIswaichu] = useState(false);
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
          <div>勤工助学</div>
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
