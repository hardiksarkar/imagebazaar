import axios from "axios";
import React, { useState,useEffect } from "react";

export default function ImageSearch({setImagelist}) {
  const baseUrl = "https://api.unsplash.com";

  const [searchInput, setSearchInput] = useState("");

  useEffect(()=>{
    searchBtnFunc(null,"random");
  },[])

  async function searchBtnFunc(e,initial) {
    delete document.getElementsByClassName(".imagelist-div")[0];
    if(e){
        e.preventDefault();
    }
    try{const imageData = await axios.get(`${baseUrl}/search/photos`,
        {
            headers : {
               "Accept-Version":"v1",
               "Authorization":`Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`
            },
            params:{
                "query":searchInput.trim()?searchInput.trim():initial,
                "per_page":30
            }
        }
    )
    setImagelist(imageData.data.results);}
    catch(error){
        console.log(error);
    }
    setSearchInput("");
  }

  return (
    <div className="search-div">
      <form action="" onSubmit={searchBtnFunc}>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search Images"
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
        />
        <button>Search</button>
      </form>
    </div>
  );
}
