import { useEffect, useState } from "react";
import * as api from "../../api"
import Cards from "./cards";
import '../Css/menu.css'
import Paggination from "./paggination";
import Suggest from "./suggest";

function Menu() {
  const [item, setItem] = useState([]);
  const [search, setSearch] = useState(" ");

  const [postperpage, Setpostperpage] = useState(3)
  const [currentpage, Setcurrentpage] = useState(1)
  const indexoflastpost = currentpage * postperpage;
  const indexoffirstpost = indexoflastpost - postperpage;

  const currentpost = item.slice(indexoffirstpost, indexoflastpost);


  useEffect(() => {
    try {
      api.fetchProducts()
        .then((res) => {
          setItem(res.data);
        });
    } catch (error) {
      console.log(error.message);
    }

  }, []);

  const pagginate = (num) => {
    Setcurrentpage(num);
  }
  return (
    <>
      {<Suggest item={item}/>}
      <div className="container-text container text-center">
        <h4>All the vegies you Need</h4>
      </div>
      <div className="search-container container text-center mb-3">
        <div className="serach-bar">
          <input className="search-input" type="text" name="" id="" placeholder="search" onChange={(event) => { setSearch(event.target.value) }} />
        </div>
      </div>

      <div className="menu-container ">

      <div className="card-container container">
          {
            currentpost.filter((val) => {
              if (search === " ") {
                return val
              }
              if (val.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
                return val;
              }
            }).map((item) => {
              return (
                <>
                  <Cards item={item}/>
                </>
              )
            })
          }

        </div>
        <div className="paagination-section center">
          <Paggination totalpost={item.length} postperpage={postperpage} pagginate={pagginate} />
        </div>
      </div>
    </>
  );
}

export default Menu;
