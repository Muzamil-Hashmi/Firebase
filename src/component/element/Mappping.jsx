import React from "react";
import { useNavigate, Link } from "react-router-dom";
function Mappping() {
  const data = [
    {
      head: "Muzamil",
      title: "Student ",
    },
    {
      head: "Saqib",
      title: "Ustad",
    },
  ];
  const navigate = useNavigate();
  return (
    <div>
      {data.map((v) => (
        <>
          <div>
            <div
              className="card bg-danger text-center mt-5 py-5"
              style={{ maxWidth: "540px" }}
              onClick={() => {
                navigate("/hero", { state: v });
              }}
            >
              <h1>{v.head}</h1>
              <p>{v.title} </p>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}

export default Mappping;
