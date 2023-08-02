import './index.scss';
import React from "react";
import {Europe} from "./continents/europe/Europe";
import {Asia} from "./continents/asia/Asia";
import {Africa} from "./continents/africa/Africa";
import {Route, Routes} from "react-router-dom";
import {Oceania} from "./continents/oceania/Oceania";
import {SouthAmerica} from "./continents/south america/SouthAmerica";
import {NorthAmerica} from "./continents/north america/NorthAmerica";
import {Header} from "./header/Header";


function App() {
    return (
        <div>
            <div>
                <Header/>
            </div>
            <div className="all_routes">


            <Routes>
                <Route path={"/europe"} element={<Europe  />}/>
                <Route path={"/asia"} element={<Asia/>}/>
                <Route path={"/africa"} element={<Africa/>}/>
                <Route path={"/oceania"} element={<Oceania/>}/>
                <Route path={"/southamerica"} element={<SouthAmerica/>}/>
                <Route path={"/northamerica"} element={<NorthAmerica/>}/>
            </Routes>

            </div>


        </div>

    )

}

export default App;
