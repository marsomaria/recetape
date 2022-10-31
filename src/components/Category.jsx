import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from 'styled-components';
import { NavLink } from "react-router-dom";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import { useState } from "react";import { useEffect } from "react";


function Category() {

  // const [cuisine, setCuisine] = useState([]);

  //   //for make the call every tame the page reloads
  //   useEffect(() => {
  //       getCuisine();
  //   }, []);
  //   const getCuisine = async () => {
  //   const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}`);
  //   const data = await api.json();
  //   console.log(data);
  // }
  const types = ["African", "American", "British", "Cajun", "Caribbean", "Chinese", "Eastern European", "European", "French", "German", "Greek", "Indian", "Irish", "Italian", "Japanese", "Jewish", "korean", "Latin American", "Mediterranean", "Mexican", "Middle Eastern", "Nordic", "Southern", "Spanish", "Thai", "Vietnamese"];
  const
  const listitems = types.map((type) => 
      <SLink to={"/cuisine/"+ type.toString()}>
        <FaHamburger />
        <h4>{type}</h4>
      </SLink>
  );


  return (
    
   <List>
    <Wrapper>
    <Splide 
                options={{
                    perPage: 6,
                    arrows: false,
                    pagination: false,
                    drag: "free",
                    gap: "1rem",
                    width: 700,
            }}
            >
      {types.map( (type) => {
        return (
          <SplideSlide key={type}>
            <SLink to={"/cuisine/"+ type.toString()}>
            <FaHamburger />
            <h4>{type}</h4>
          </SLink>
          </SplideSlide>

        );
      })}
    </Splide></Wrapper>


    {/* {listitems} */}
    {/* //     <SLink to={"/cuisine/Italian"}>
    //         <FaPizzaSlice />
    //         <h4>iTALIAN</h4>
    //     </SLink>

    //     <SLink to={"/cuisine/American"}>
    //         <FaHamburger />
    //         <h4>aMeERICAN</h4>
    //     </SLink>

    //     <SLink to={"/cuisine/Thai"}>
    //         <GiChopsticks />
    //         <h4>Thai</h4>
    //     </SLink>

    //     <SLink to={"/cuisine/Japanese"}>
    //         <GiNoodles />
    //         <h4>JAPENESE</h4>
    //     </SLink> */}

       
    </List>
  )
}

const Wrapper = styled.div`
    margin: 0% 50%;    
`;
const List= styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
`;


const SLink = styled(NavLink)`
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: sclae(0.8);

  h4{
    color:white;
    font-size: 0.8rem;

  }

  svg{
    color: white;
    font-size: 1.5rem;
  }
  
  &.active{
    background: linear-gradient(to right, #f27121, #e94057);
    svg{
      color:white;
    }
    h4{
      color:white;
    }
  }
  

 
  `;



export default Category;  