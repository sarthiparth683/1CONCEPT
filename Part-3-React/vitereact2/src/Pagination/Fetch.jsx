import { useEffect, useState } from "react";
import styled from "styled-components";

const Fetch = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <>
      <Box>
        {data &&
          data.map((item) => (
            <div key={item.id}>
              <div className="box1">
                <Image>
                  <img src={item.image} alt="error" />
                </Image>
                <Title>
                  <span>Title:-</span> {item.title}
                </Title>
                <Price>
                  <span>Price:-</span> {item.price}
                </Price>
                <Category>
                  <span>Category:-</span> {item.category}
                </Category>
              </div>
            </div>
          ))}
      </Box>
    </>
  );
};
export default Fetch;

const Box = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  .box1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 300px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 45px;
  }
`;

const Image = styled.div`
  img {
    width: 100px;
  }
`;
const Title = styled.div`
  span {
    color: black;
    font-size: 18px;
    font-weight: bold;
  }
`;
const Price = styled.div`
  span {
    color: black;
    font-size: 18px;
    font-weight: bold;
  }
`;
const Category = styled.div`
  span {
    color: black;
    font-size: 18px;
    font-weight: bold;
  }
`;
