import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";

function Veggie() {

    const [veggie, setVeggie] = useState([]);

    //for make the call every tame the page reloads
    useEffect(() => {
        getVeggie();
    }, []);

    const getVeggie = async () => {

        //check is there is anything in localstorage
        //if there is something we don not do the call again because there is limited calls for a day
        const check = localStorage.getItem('veggie');
        if(check){
            setVeggie(JSON.parse(check));

        }else{
            //we make the api data search 
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`);
            //&numer=x`)--> with that we say how many objects we want
            const data = await api.json();
            //save in local storage
            //we only can save strings, so we make thath data to string
            localStorage.setItem('veggie', JSON.stringify(data.recipes));

            //lets save all the data in a variable
            //data.recipes because the api call return de data in a json inside recipes
            setVeggie(data.recipes);
            console.log(data.recipes);
        }


        
    };



  return (
    <div>
        {/* //we are going inside each recipe and returning the info*/}
        <Wrapper>
            <h3>Veggie Picks</h3>
            <Splide 
                options={{
                    perPage: 3,
                    arrows: false,
                    pagination: true,
                    drag: "free",
                    gap: "5rem",
            }}
            >
            {veggie.map( (recipe) => {
                return (
                    <SplideSlide key={recipe.id}>
                        <Card>
                            <Link to={'/recipe/' + recipe.id}>
                                <p>{recipe.title}</p>
                                <img src={recipe.image} alt={recipe.title} />
                                <Gradient />
                            </Link>
                        </Card>
                    </SplideSlide>
                );
            })}
            </Splide>
        </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
    margin: 4rem 0rem;    
`;

const Card = styled.div`
    min-height: 25rem;
    border-radius: 2rem;
    overflow: hidden;
    position: relative;

    img {
        border-radius: 2rem;
        position: absolute;
        left:0;
        width: 100%;
        height: 100%;
        object-fit: cover;

    }

    p{
        position: absolute;
        z-index: 10;
        left: 50%;
        bottom: 0%;
        transform: translate(-50%, 0%);
        color: white;
        width: 100%;
        text-align: center;
        font-weigth: 600;
        font-size: 1rem;
        height: 40%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const Gradient = styled.div`
    z-index: 3;
    position: absolute;
    width: 100%;
    heigth: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;
export default Veggie;