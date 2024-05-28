import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle";
import { FaUtensils } from "react-icons/fa";

const AddItems = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <div>
            <SectionTitle subHeading={"---What's new?---"} heading={"ADD AN ITEM"}></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <label className="form-control w-full my-6 ">
                        <div className="label">
                            <span className="label-text">Recipe Name*</span>

                        </div>
                        <input
                            type="text"
                            placeholder="name"
                            {...register("name", { required: true })}
                            className="input input-bordered w-full " />

                    </label>
                    <div className="flex gap-6">


                        {/* category */}
                        <div className="form-control w-full my-6 ">
                            <label className="label">
                                <span className="label-text">Category*</span>

                            </label>

                            <select
                                {...register('category', { required: true })}

                                className="select select-bordered w-full">
                                <option disabled selected>Select a category</option>
                                <option value="salad">salad</option>
                                <option value="desert">desert</option>
                                <option value="pizza">pizza</option>
                                <option value="drinks">drinks</option>
                                <option value="soup">soup</option>

                            </select>

                        </div>




                        {/* price */}


                        <div className="form-control w-full my-6 ">
                            <div className="label">
                                <span className="label-text">Price*</span>

                            </div>
                            <input
                                type="number"
                                placeholder="price"
                                {...register("price", { required: true })}
                                className="input input-bordered w-full " />

                        </div>
                    </div>

                    {/* reccipe details */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Recipe details</span>

                        </label>
                        <textarea
                            {...register("recipe", { required: true })}
                            className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>

                    </div>

                    <div className="form-control w-full my-6 ">
                        <input
                            type="file"
                            {...register("image", { required: true })}
                            className="file-input file-input-bordered w-full max-w-xs" />
                    </div>





                    <button className="btn">Add Item
                        <FaUtensils></FaUtensils></button>
                </form>
            </div>
        </div>
    );
};

export default AddItems;