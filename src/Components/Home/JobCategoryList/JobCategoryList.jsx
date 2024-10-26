
import { useEffect, useState } from "react";
import Catagory from "./Catagory";

const JobCategoryList = () => {

    const [categories, setCategories] = useState([])
    useEffect(()=>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    } , [])

    return (
        <div>
            <div className="my-10">
                <div className="text-center">
                    <h2 className="text-5xl font-bold my-4">Job Category List</h2>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future.</p>
                </div>
                <div className="grid grid-cols-4 gap-5 mt-4">
                    {
                        categories.map(category => <Catagory key={category.id} category={category}></Catagory>)
                    }
                </div>
            </div>
        </div>
    );
};

export default JobCategoryList;