import PropTypes from "prop-types";

const Catagory = ({ category }) => {
    const { id, logo, category_name, availability } = category;
    return (
        <div>
        <div>
            <img src={logo} alt="" />
            <p>Name: {category_name}</p>
        </div>
        </div>
    );
};

Catagory.propTypes = {
category: PropTypes.object.isRequired,
};
export default Catagory;
