import  { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
import Home from "./Home";
import MenuPage from "./MenuPage.jsx";
import MenuPage2 from "./MenuPage2.jsx";
const allCategories = ['all', ...new Set(items.map(item => item.category))];

function App() {
    const [menuItems, setMenuItems] = useState(items);
    const [categories, setCategories] = useState(allCategories);

    const filterItems = category => {
        console.log('click', category);
        if(category === 'all'){
            setMenuItems(items);
            return;
        }
        const newItems = items.filter((item) => item.category === category);
        setMenuItems(newItems);
    };
    console.log(setCategories);

    return (
        <main>
            <Home/>
            <MenuPage />
            <MenuPage2 />
            {/*<section className="menu section">*/}
            {/*    <div className="title">*/}
            {/*        <h2>our menu</h2>*/}
            {/*        <div className="underline" />*/}
            {/*    </div>*/}
            {/*    <Categories categories={categories} filterItems={filterItems} />*/}
            {/*    <Menu items={menuItems} />*/}
            {/*</section>*/}
        </main>
    );
}

export default App;
