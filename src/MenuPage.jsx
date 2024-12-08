
function MenuPage () {
    return (
        <section className="section"
                 style={{backgroundColor: "#E6D4C6", height: "auto", paddingBottom: "7rem", position: "relative", marginBottom: "1rem"}}>

            <div className="food-banner" style={{position: "absolute", top: "-32px", left: "-1px"}}>
                <img src={"./images/starter-food.png"} alt="food-banner" width="100%"/>
            </div>
            <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", padding: "1rem 0.5rem", gap: "0.8rem"}}>
                <div style={{backgroundColor: "", paddingTop: "24rem", paddingLeft: "0.5rem"}}>
                    <header style={{borderBottom: "2px solid black", marginBottom: "1.2rem",}}>
                        <span style={{fontFamily: "jost", fontSize: "24px", fontWeight: "500"}}>STARTERS</span>
                    </header>

                    {menuItems.filter(menuItem => menuItem.category === "STARTERS").map(menuItem => {
                        const {id, description} = menuItem;
                        return (
                            <article key={id} className="" style={{}}>
                                <div className="">

                                    <p style={{marginTop: "-0.5rem"}} className="">{description}</p>

                                </div>
                            </article>
                        )
                    })}

                </div>


                <div style={{backgroundColor: "", paddingLeft: ""}}>
                    <header style={{borderBottom: "2px solid black", marginBottom: "0.7rem"}}>
                        <span style={{fontFamily: "jost", fontSize: "24px", fontWeight: "500"}}>MAIN COURSE</span>
                    </header>
                    {menuItems.filter(menuItem => menuItem.category === "MAIN COURSE").map(menuItem => {
                        const {id, title, description} = menuItem;
                        return (
                            <article key={id} className="" style={{}}>
                                <div className="">

                                    <h4 style={{backgroundColor: ""}}>{title}</h4>
                                    <p style={{marginTop: "-0.5rem"}} className="">{description}</p>

                                </div>
                            </article>
                        )
                    })}
                </div>


            </div>
            <div className="food-banner" style={{position: "absolute", bottom: "-36px", right: "0px", rotate: ""}}>
                <img src={"./images/bbq1.png"} alt="food-banner" width="100%"/>
            </div>

        </section>
    );
}

export default MenuPage;


export const menuItems = [
    {
        id: "1",
        category: "STARTERS",
        title: "",
        description: "Smoked Chicken, Chili and green bean salad with wild African honey-mustard. ",
    },
    {
        id: "2",
        category: "STARTERS",
        title: "",
        description: "Potatoes with Norwegian salmon chives. ",
    },
    {
        id: "3",
        category: "STARTERS",
        title: "",
        description: "Homemade deli style infused breads.",
    },
    {
        id: "4",
        category: "STARTERS",
        title: "",
        description: "Prawns tossed with Cucumbers and light curry dressing.",
    },
    {
        id: "5",
        category: "STARTERS",
        title: "",
        description: "Pasta Salad with smoked chicken and crunchy vegetables. ",
    },
    {
        id: "6",
        category: "MAIN COURSE",
        title: "STEAK",
        description: "Cracked pepper rib steaks. ",
    },
    {
        id: "7",
        category: "MAIN COURSE",
        title: "BBQ CHICKEN",
        description: "BBQ chicken drumsticks and thighs. ",
    },{
        id: "8",
        category: "MAIN COURSE",
        title: "GRILLED FISH",
        description: "Grilled fish fillet with tomato salsa. ",
    },{
        id: "9",
        category: "MAIN COURSE",
        title: "SPAGHETTI",
        description: "Stir fried spaghetti. ",
    },{
        id: "10",
        category: "MAIN COURSE",
        title: "SEAFOOD CURRY",
        description: "Seafood curry sauce. ",
    },{
        id: "11",
        category: "MAIN COURSE",
        title: "SPICY RICE",
        description: "Egg fried rice with wok fried green vegetables. ",
    },
    {
        id: "12",
        category: "MAIN COURSE",
        title: "CHAR GRILLED FISH",
        description: "Char grilled fish tomato chunks and lemon. ",
    }, {
        id: "13",
        category: "NIGERIAN DISHES",
        title: "",
        description: "Catfish Pepper Soup. ",
    }, {
        id: "14",
        category: "NIGERIAN DISHES",
        title: "",
        description: "Afang Soup. ",
    }, {
        id: "15",
        category: "NIGERIAN DISHES",
        title: "",
        description: "Turkey Stew. ",
    }, {
        id: "16",
        category: "NIGERIAN DISHES",
        title: "",
        description: "Grilled Chicken Suya. ",
    }, {
        id: "17",
        category: "NIGERIAN DISHES",
        title: "",
        description: "Fried rice and Jollof rice. ",
    }, {
        id: "18",
        category: "NIGERIAN DISHES",
        title: "",
        description: "Egusi Soup. ",
    }, {
        id: "19",
        category: "NIGERIAN DISHES",
        title: "",
        description: "Semovita and Poundo. ",
    },
    {
        id: "20",
        category: "NIGERIAN DISHES",
        title: "",
        description: "Moi and Plantain. ",
    },{
        id: "21",
        category: "COCKTAILS",
        title: "",
        description: "Mojito. ",
    },{
        id: "22",
        category: "COCKTAILS",
        title: "",
        description: "Swimming Pool. ",
    },{
        id: "23",
        category: "COCKTAILS",
        title: "",
        description: "Whisky Sour. ",
    },{
        id: "24",
        category: "COCKTAILS",
        title: "",
        description: "Capriha. ",
    },{
        id: "25",
        category: "COCKTAILS",
        title: "",
        description: "Pina Colada. ",
    },{
        id: "26",
        category: "MOCKTAILS",
        title: "",
        description: "Virgin Colada. ",
    },{
        id: "27",
        category: "MOCKTAILS",
        title: "",
        description: "Nojito-Strawberry. ",
    },{
        id: "28",
        category: "MOCKTAILS",
        title: "",
        description: "Nojito-Green Apple. ",
    },{
        id: "29",
        category: "MOCKTAILS",
        title: "",
        description: "Chapman. ",
    },

]