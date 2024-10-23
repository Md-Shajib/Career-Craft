import PropTypes from "prop-types";

const Catagory = ({ category }) => {
    const { logo, category_name, availability } = category;
    return (
        <div>
            <div className="text-left bg-green-50 p-7 rounded-md">
                <div className="mb-5"><img src={logo} alt="" /></div>
                <div>
                    <h2 className="font-bold text-2xl mb-2">{category_name}</h2>
                    <p>{availability}</p>
                </div>
            </div>
        </div>
    );
};

Catagory.propTypes = {
category: PropTypes.object.isRequired,
};
export default Catagory;
