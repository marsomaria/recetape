import React from 'react'
import {useEffect, useState} from "react";
import styled from "styled-components";
import { useParams } from 'react-router-dom';
import { FaPushed } from 'react-icons/fa';

function Recipe() {
    let params = useParams();
    const [details, setDetails] = useState({});
    const [activeTab, setActiveTab] = useState("summary");
    const [activePlus, setActivePlus] = useState("details");
    let diets="";
    const fecthDetails = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
        const detailData= await data.json();
        setDetails(detailData);
        console.log(detailData);
        diets=detailData.diets + "";
        for(let i=0; i<detailData.diets.length; i++){
            diets += detailData.diets[i] + "<br>";
        }
         console.log(diets);
        
         
    };

    useEffect(()=>{
        fecthDetails();

    },[params.name]);



  return (
    <div>
    <h2>{details.title}</h2>
    <DetailWrapper>
         
        <div>
           
            <img src={details.image} alt={details.title} width="300" />
            <p>{diets}</p>
                {/* <div dangerouslySetInnerHTML={{ __html: details.diets }}></div>
                <p dangerouslySetInnerHTML={{ __html: details.diets }}></p> */}
                
                {/* <span style="text-transform:uppercase">{details.diets}</span> */}
                <div className='detailsDiv'>
                    <Button className={activePlus === 'details' ? 'active' : ''} onClick={() => setActivePlus('details')}> Details   </Button>
                    <Button className={activePlus === 'wine' ? 'active' : ''} onClick={() => setActivePlus('wine')}> Wine   </Button>
                    <Button className={activePlus === 'cuisine' ? 'active' : ''} onClick={() => setActivePlus('cuisine')}> Cuisine   </Button>
                
                {activePlus === "details" && (
                <div>
                    <p dangerouslySetInnerHTML={{ __html: details.diets }}></p>
                </div>
                )}

                {activePlus === "cuisine" && (
                    <div>
                        
                        <p dangerouslySetInnerHTML={{ __html: details.cuisines }}></p>
                    </div>
                )}

                {activePlus === "wine" && (
                    
                        <p>{details.winePairing.pairedWines}</p>
                        
                    
                )}
                    
                </div>
        </div> 

        <Info>
            <Button className={activeTab === 'summary' ? 'active' : ''} onClick={() => setActiveTab('summary')}> Summary   </Button>
            <Button className={activeTab === 'instructions' ? 'active' : ''} onClick={() => setActiveTab('instructions')}> Instructions   </Button>
            <Button className={activeTab === 'ingredients' ? 'active' : ''} onClick={() => setActiveTab('ingredients')}> Ingredients   </Button>
        
        {activeTab === "summary" && (
        <div>
            <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
        </div>
        )}

        {activeTab === "instructions" && (
            <div>
                
                <p dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
            </div>
        )}

        {activeTab === "ingredients" && (
            <ul>
                {details.extendedIngredients.map((ingredient) => (
                    <li key={ingredient.id}>{ingredient.original}</li>
                ))}
            </ul>
        )}
            
        </Info>
    
    </DetailWrapper>
    </div>
  );
}


const DetailWrapper =styled.div`
    // margin-top: 10rem;
    margin-top: 2rem;
    margin-bottom: 5rem;
    display: flex;
    .active{
        // background: linear-gradient(35deg, #494949, #313131);
        //background: #f0682b;
        background: linear-gradient(to right,#f27121,#e94057);
        color: white;
    }
    h2{
        margin-bottom: 2rem;
    }
    li{
        font-zise: 1.2rem;
        line-height: 2.5rem;

    }
    ul{
        margin-top: 2rem;
    }
    
    p{
        padding: 1rem;
        line-height: 1.5rem;
        text-align: justify;
    }
    img {
        border-radius: 2rem;
        
    }
    .detailsDiv>Button{
        padding: 1rem 1rem;
        color: #313131;
        background: white;
        border-style: none none solid none;
        border-color:#383838;
        // border: 2px solid black;
        margin-right: 0rem;
        font-weight: 550;
    }
    .detailsDiv>Button.active{
        background: #383838;
        color: white;
    }
`;


const Button =styled.button`
    padding: 1rem 2rem;
    color: #313131;
    background: white;
    border-style: none none solid none;
    border-color:#f0682b;
    // border: 2px solid black;
    margin-right: 0rem;
    font-weight: 600;

`;

const Info= styled.div`
    // margin-left: 10rem;
    margin-left: 5rem;
    
`;



export default Recipe;