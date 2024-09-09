import seriesData from "./seriesData.json";
const Usemap = () => {
  return (
    <>
      <h1 style={{ textAlign: "center", background: "lightgreen" }}>
        Using Map Function
      </h1>
      <ul>
        {seriesData.map((curElem) => {
          return (
            <li key={curElem.id}>
              <div>
                <img src={curElem.image} alt="image" width="10%" /> <br />
                <b>Title{curElem.title}</b>
                <b>Description{curElem.description}</b>
                <b>Category{curElem.category}</b>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Usemap;
