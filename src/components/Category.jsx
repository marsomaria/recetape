import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks,GiAfrica, GiTeapot,GiKnifeFork  } from "react-icons/gi";
import { IconName } from "react-icons/fa";
import styled from 'styled-components';
import { NavLink } from "react-router-dom";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import { useState } from "react";
import { useEffect } from "react";
import React from "react";
import DOMPurify from "dompurify";
import * as FontAwesome from "react-icons/fa";


function Category() {
  //const types = ["African", "American", "British", "Cajun", "Caribbean", "Chinese", "Eastern European", "European", "French", "German", "Greek", "Indian", "Irish", "Italian", "Japanese", "Jewish", "korean", "Latin American", "Mediterranean", "Mexican", "Middle Eastern", "Nordic", "Southern", "Spanish", "Thai", "Vietnamese"];
  const types = [{name:"African", icon:"<GiAfrica />"}, {name:"American", icon:"<FaHamburger />"}, {name:"British",icon:"<GiTeapot />"},{name:"Cajun", icon:"<CgBowl />"}, {name:"Caribbean",icon:"<GiPalmTree />"},{name:"Chinese",icon:"<GiNoodles />"}, {name:"Eastern European", icon:"<GiSpoon />"},{name:"European", icon:"<CiForkAndKnife />"},{name:"French", icon:"<GiCroissant />"},{name:"German", icon:"<GiSausage />"},{name:"Greek", icon:"<GiGreekTemple />"},{name:"Indian", icon:"<GiIndianPalace />"},{name:"Irish", icon:"<GiElfEar />"},{name:"Italian", icon:"<CiPizza />"},{name:"Japanese", icon:"<GiSushis />"},{name:"Jewish", icon:"<TbJewishStar />"},{name:"korean", icon:"<MdOutlineRiceBowl />"},{name:"Latin American", icon:"<GiCoffeeBeans />"},{name:"Mediterranean", icon:"<BsSun />"},{name:"Mexican", icon:"<GiNachos />"},{name:"Middle Eastern", icon:"<GiBubblingBowl />"},{name:"Nordic", icon:"<SiNordvpn />"},{name:"Southern", icon:"<GiChickenLeg />"},{name:"Spanish", icon:"<GiSpain />"},{name:"Thai", icon:"<GiChopsticks />"},{name:"Vietnamese",icon:"<GiSaucepan />"}];
  // const Icon = props => {
  //   const { iconName, size, color } = props;
  //   const icon = React.createElement(FontAwesome[iconName]);
  //   return <div style={{ fontSize: size, color: color }}>{icon}</div>;
  // };

  // const types = [{name:"African", icon:"GiAfrica "}, {name:"American", icon:"FaHamburger "},  {name:"British",icon:"GiTeapot "}, {name:"Cajun", icon:"CgBowl "},  {name:"Caribbean",icon:"GiPalmTree "},   {name:"Chinese",icon:"GiNoodles "},  {name:"Eastern European", icon:"GiSpoon "}, {name:"European", icon:"CiForkAndKnife "}, {name:"French", icon:"GiCroissant "}, {name:"German", icon:"GiSausage "}, {name:"Greek", icon:"GiGreekTemple "},  {name:"Indian", icon:"GiIndianPalace "}, {name:"Irish", icon:"GiElfEar"}, {name:"Italian", icon:"CiPizza "}, {name:"Japanese", icon:"GiSushis "},  {name:"Jewish", icon:"TbJewishStar "}, {name:"korean", icon:"MdOutlineRiceBowl "}, {name:"Latin American", icon:"GiCoffeeBeans "}, {name:"Mediterranean", icon:"BsSun "}, {name:"Mexican", icon:"GiNachos "}, {name:"Middle Eastern", icon:"GiBubblingBowl "},  {name:"Nordic", icon:"SiNordvpn "}, {name:"Southern", icon:"GiChickenLeg "},{name:"Spanish", icon:"GiSpain "},{name:"Thai", icon:"GiChopsticks "}, {name:"Vietnamese",icon:"GiSaucepan "}];
  console.log(types);
  // const listitems = types.map((type) => 
  //     <SLink to={"/cuisine/"+ type.toString()}>
  //       <FaHamburger />
  //       <h4>{type}</h4>
  //     </SLink>
  // );


    


  return (
    
   <List>
    <Wrapper>
      <Splide options={{perPage: 6,arrows: true,pagination: false,drag: "free",gap: "1rem",width: 700, }}>
        {types.map( (type) => {
          
          return (
            <SplideSlide key={type.name}>
              <SLink to={"/cuisine/"+ type.name}>
                
                {/* <div dangerouslySetInnerHTML={{ __html: type.icon }}></div>
                <div>{type.icon}</div>
                <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(type.icon) }}/> */}
                <GiKnifeFork />
                <h4>{type.name}</h4>
              </SLink>
            </SplideSlide>

          );
        })}
      </Splide>
    </Wrapper>


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