import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle";
import { useForm } from "react-hook-form";
import { FaEdit } from "react-icons/fa";
import useAxiosCommon from "../../../hooks/useAxiosCommon";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import toast from "react-hot-toast";



const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const UpdateItem = () => {
    const { name, recipe, price, category, _id } = useLoaderData();
    const axiosCommon = useAxiosCommon();
    const axiosSecure = UseAxiosSecure();
    const { register, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        //image upload to imgBB and get the url
        const imgFile = { image: data.image[0], }
        const res = await axiosCommon.post(image_hosting_api, imgFile, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }

        })
        if (res.data.success) {
            const menuItems = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url

            }

            const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItems)
            console.log(menuRes.data)
            if (menuRes.data.modifiedCount) {

                toast.success("Item updated successfully");

            }
        }

    }


    return (
        <div>
            <SectionTitle heading={"UPDATE ITEM"}></SectionTitle>
            <div>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <label className="form-control w-full my-6 ">
                            <div className="label">
                                <span className="label-text">Recipe Name*</span>

                            </div>
                            <input
                                type="text"

                                defaultValue={name}
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
                                    defaultValue={category}

                                    className="select select-bordered w-full">
                                    <option disabled value={"default"}>Select a category</option>
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
                                    defaultValue={price}

                                    {...register("price", { required: true })}
                                    className="input input-bordered w-full " />

                            </div>
                        </div>

                        {/* recipe details */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Recipe details</span>

                            </label>
                            <textarea
                                defaultValue={recipe}
                                {...register("recipe", { required: true })}

                                className="textarea textarea-bordered h-24" placeholder="write here"></textarea>

                        </div>

                        <div className="form-control w-full my-6 ">
                            <input
                                type="file"

                                {...register("image", { required: true })}
                                className="file-input file-input-bordered w-full max-w-xs" />
                        </div>

                        <button className="btn">Update item
                            <FaEdit /></button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateItem;