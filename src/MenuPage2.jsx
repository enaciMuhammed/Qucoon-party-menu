import {menuItems} from "./MenuPage.jsx";

function MenuPage () {
    return (
        <section className="section"
                 style={{backgroundColor: "#E6D4C6", height: "auto", paddingBottom: "10.5rem", position: "relative", marginBottom: "1rem"}}>

            <div className="food-banner" style={{position: "absolute", top: "-32px", left: "-1px"}}>
                <img src={"./images/jollof.png"} alt="food-banner" width="52%"/>
            </div>

            <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", padding: "1rem 0.5rem", gap: "0.8rem"}}>

                <div style={{backgroundColor: "", paddingTop: "26.5rem", paddingLeft: "0.5rem"}}>
                    <header style={{borderBottom: "2px solid black", marginBottom: "1.2rem",  textAlign: "center"}}>
                        <span style={{fontFamily: "jost", fontSize: "24px", fontWeight: "500",}}>NIGERIAN DISHES</span>
                    </header>

                    {menuItems.filter(menuItem => menuItem.category === "NIGERIAN DISHES").map(menuItem => {
                        const {id, description} = menuItem;
                        return (
                            <article key={id} className="" style={{}}>
                                <div className="">

                                    <p style={{marginTop: "-0.5rem", color: "#333"}} className="">{description}</p>

                                </div>
                            </article>
                        )
                    })}

                </div>


                <div style={{backgroundColor: "", paddingLeft: ""}}>
                    <header style={{borderBottom: "2px solid black", marginBottom: "0.7rem", backgroundColor: ""}}>
                        <span style={{fontFamily: "jost", fontSize: "24px", fontWeight: "500"}}>MAIN COURSE</span>
                    </header>
                    <article  className="" style={{}}>
                        <div className="">

                            <p style={{marginTop: "0.5rem", color: "#333"}} className="">7 mini selection of in-house made desert</p>
                            <p style={{marginTop: "-0.5rem", color: "#333"}} className="">Slice fruits of the day</p>

                        </div>
                    </article>

                    <div style={{marginTop: "3.5rem", border: "1px solid #000", paddingBottom: "2rem"}}>
                        <header style={{ marginBottom: "0.7rem", backgroundColor: "#302F2F", padding: "0.8rem 1rem", textAlign: "center", color: "white"}}>
                            <span style={{fontFamily: "jost", fontSize: "26px", fontWeight: "500", letterSpacing: "4px"}}>DRINKS</span>
                        </header>

                        <div style={{textAlign: "center", marginBottom: "1.5rem", }}>
                            <header
                                style={{ marginBottom: "0.7rem", backgroundColor: ""}}>
                                <span
                                    style={{fontFamily: "jost", fontSize: "23px", fontWeight: "500"}}>COCKTAILS</span>
                            </header>
                            {menuItems.filter(menuItem => menuItem.category === "COCKTAILS").map(menuItem => {
                                const {id, description} = menuItem;
                                return (
                                    <article key={id} className="" style={{}}>
                                        <div className="">

                                            <p style={{marginTop: "-0.5rem", color: "#333"}} className="">{description}</p>

                                        </div>
                                    </article>
                                )
                            })}

                        </div>

                        <div style={{textAlign: "center"}}>
                            <header
                                style={{ marginBottom: "0.7rem", backgroundColor: ""}}>
                                <span
                                    style={{fontFamily: "jost", fontSize: "23px", fontWeight: "500"}}>MOCKTAILS</span>
                            </header>
                            {menuItems.filter(menuItem => menuItem.category === "MOCKTAILS").map(menuItem => {
                                const {id, description} = menuItem;
                                return (
                                    <article key={id} className="" style={{}}>
                                        <div className="">

                                            <p style={{marginTop: "-0.5rem", color: "#333"}} className="">{description}</p>

                                        </div>
                                    </article>
                                )
                            })}

                        </div>
                    </div>
                </div>


            </div>
            <div className="food-banner" style={{position: "absolute", bottom: "-38px", right: "-84px", rotate: ""}}>
                <img src={"./images/fruits.png"} alt="food-banner" width="70%"/>
            </div>

        </section>
    );
}

export default MenuPage;


