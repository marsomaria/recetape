import styled from "styled-components";
import { useState } from "react";
import  { FaSearch } from "react-icons/fa";
import { useNavigate} from "react-router-dom";


function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();


  //to change the route to the new text of the input and look for it
  const submitHandler = (e) => {
    e.preventDefault();
    navigate('/searched/' + input);
  };



  return (
    <FormStyle onSubmit={submitHandler}>
      <div>
        <FaSearch/>
        <input onChange={(e) => setInput(e.target.value)} type="text" value={input}/>
        
      </div>
    </FormStyle>

  );
}


const FormStyle=styled.form`
    margin: 0rem 20rem;

    div{
      width: 100%;
      position: relative;
    }

    input{
        border: none;
        //background: linear-gradient(35deg, #494949, #313131);
        background: linear-gradient(to right,#f27121,#e94057);
        font-size: 1.5rem;
        color: white;
        padding: 1rem 3rem;
        border:none;
        border-radius: 1rem;
        outline: none;
        width: 100%;
    }

    svg{
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
        color: white;
    }
`;

export default Search;