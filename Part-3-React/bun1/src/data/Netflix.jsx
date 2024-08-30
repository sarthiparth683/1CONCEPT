import seriesData from "./seriesData.json";

const Netflix = () => {
  return (
    <>
      <h1 style={{ textAlign: "center", background: "lightgreen" }}>Dynamic way</h1>
      <div>
        <h1>Netflix</h1>
        <img src={seriesData[0].image} alt="image" width="10%" /> <br />
        <b>Title{seriesData[0].title}</b>
        <b>Description{seriesData[0].description}</b>
        <b>Category{seriesData[0].category}</b>
      </div>

      <div>
        <img src={seriesData[1].image} alt="image" width="10%" /> <br />
        <b>Title{seriesData[1].title}</b>
        <b>Description{seriesData[1].description}</b>
        <b>Category{seriesData[1].category}</b>
      </div>
    </>
  );
};

export default Netflix;
