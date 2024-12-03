import Logo from "./Logo";

function Home () {
    return (
        <section className="section" style={{backgroundColor: "#E6D4C6", height: "auto", paddingBottom: "3rem"}}>
            <Logo />
            <div className="food-banner">
                <img src={"./images/food_on_plate-1.png"} alt="food-banner" width="100%" />
            </div>
            <div className="bottom">
                <div className="text-menu" >MENU</div>
                <p className="qucoon">QUCOON</p>
                <p className="party"> END OF YEAR PARTY</p>
                <div className="divider"></div>
                <p className="location">RADISSON BLU V.I</p>
                <p className="date">17th Dec 2024</p>
            </div>
        </section>
    );
}

export default Home;