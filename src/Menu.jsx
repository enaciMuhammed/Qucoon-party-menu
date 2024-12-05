import PropTypes from "prop-types";

const Menu = ({ items }) => {
    return (
        <div className="section-center">
            {items.map(menuItem => {
                const { id, title, img, desc, types  } = menuItem;
                return (
                    <article key={id} className="menu-item" >
                        {img ? <img src={img} alt={title} className="photo"/> : null}
                        <div className="item-info"  >
                            <header>
                                <h4>{title}</h4>
                                {/*<h4 className="price">${price}</h4>*/}

                            </header>
                            <p className="item-text">{desc}</p>
                            {types ?
                                <>
                                    <p className="item-text">{types.num1}</p>
                                    <p className="item-text">{types.num2}</p>
                                    <p className="item-text">{types.num3}</p>
                                    <p className="item-text">{types.num4}</p>
                                    <p className="item-text">{types.num5}</p>
                                </>
                                : null}
                        </div>
                    </article>
                );
            })}
        </div>
    );
};

export default Menu;

Menu.propTypes = {
    items: PropTypes.array.isRequired,
}