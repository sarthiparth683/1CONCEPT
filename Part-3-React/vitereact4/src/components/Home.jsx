import { useSelector } from "react-redux"

const Home = () => {
const {value: countVlaue = 0} = useSelector (({count}) =>  count) ;

  return ( 
    <div>{countVlaue}</div>
  )
}

export default Home 