import React from "react";
import Button from "@mui/material/Button";

function Body(props) {
  const filtredData = props.data.slice(0, 80);
  const readyData = filtredData.map((item) => {
    return (
      <div className="quotes-container">
        <div key={item.id} className="quotes">
          {item.content || item.text}
          <Button
            variant="contained"
            style={{ fontFamily: "Tajawal,sanSerif" }}
            onClick={() => {
              navigator.clipboard.writeText(item.content);
            }}
          >
            نسخ
          </Button>
        </div>
      </div>
    );
  });
  return (
    <div className="con blur-in-expand">
      <div className="quotes-space">{readyData}</div>
    </div>
  );
}

export default Body;
