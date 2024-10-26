import PropTypes from "prop-types";

const Catagory = ({ category }) => {
    const { logo, category_name, availability } = category;
    return (
        <div>
            <div className="bg-green-50 p-5 md:p-7 rounded-md">
                <div className="flex justify-center md:justify-start mb-5">
                    <img src={logo} alt="" />
                </div>
                <div className="text-center md:text-left">
                    <h2 className="font-bold text-base md:text-xl lg:text-2xl mb-2">{category_name}</h2>
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
