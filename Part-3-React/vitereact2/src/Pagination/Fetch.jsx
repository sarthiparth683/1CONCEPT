import { useEffect, useState } from "react";
import styled from "styled-components";
import Search from "./Search";
import Filter from "./Filter";
import Pagination from "./Pagination";

const Fetch = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const result = await response.json();
        setData(result);
        setFilteredData(result);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const filtered = data.filter(
      (item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) &&
        (category ? item.category === category : true)
    );
    setFilteredData(filtered);
    setCurrentPage(1); // Reset to first page on filter change
  }, [query, category, data]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const categories = [...new Set(data.map((item) => item.category))];

  return (
    <>
      <Search query={query} setQuery={setQuery} />
      <Filter
        category={category}
        setCategory={setCategory}
        categories={categories}
      />
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
      <Box>
        {paginatedData.map((item) => (
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
