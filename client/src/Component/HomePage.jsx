import React, { useEffect, useState } from "react";

const HomePage = () => {
  const [textdata, setText] = useState("");
  const [data, setData] = useState([]);
  const handleChange = async (e) => {
    setText(e.target.value);
  };
  const [check, setChecked] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(textdata===""){
        alert("Fileds cannot be empty")
    }else{
    const res = await fetch("/create-list", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: textdata,
      }),
    });
    if (!res.status === 200) {
      const resp = await res.json();
      console.log(resp);
    } else {
      const resp = await res.json();
      setData(resp.data)
      setText("")
      console.log(resp);
    }
}
  };
  const getPage = async () => {
    const res = await fetch("/get-data", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.status === 200) {
      const resp = await res.json();
      console.log(resp);
    } else {
      const resp = await res.json();
      setData(resp.data);
    }
  };
  const handleCheck = (e) => {
    setChecked(!check);
  };
  const handleDelete = async (d) => {
    // e.preventDefault();
    const res = await fetch(`/delete/${d._id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.status === 200) {
    //   const resp = await res.json();
    //   console.log(resp);
    } else {
      const resp = await res.json();
      setData(resp.data)
      window.location.reload()
      setChecked(!check)
    }
  };
  useEffect(() => {
    getPage();
  }, []);
  return (
    <>
      <div className="box" id="heading">
        <h1>To do List-:</h1>
      </div>
      <div className="box">
        {data.length === 0 ? (
          <></>
        ) : (
          <>
            {data.map((d, i) => {
              return (
                <div className="item" key={i}>
                  <input
                    type="checkbox"
                    name="check"
                    checked={check}
                    onChange={handleCheck}
                    onClick={() => {
                      handleDelete(d);
                    }}
                  />
                  <p>{d.content}</p>
                </div>
              );
            })}
          </>
        )}
        <form className="item">
          <input
            type="text"
            name="text"
            value={textdata}
            placeholder="New Item"
            onChange={handleChange}
            required={true}
            autoComplete="off"
          />
          <button onClick={handleSubmit}>+</button>
        </form>
      </div>
    </>
  );
};

export default HomePage;

/*
                  {check && <>{()=>{handleDelete(d)}}</>}

 <form action="/delete/<%=i._id%>" method="post">
          <div className="item">
            <input type="checkbox" name="check" onchange="this.form.submit()" />
            <p><%=i.content%></p>
            </div>
            </form>

*/
