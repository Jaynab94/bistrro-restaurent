import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle";

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
                    <input {...register("Name")} />


                    <select
                        {...register("category")}
                        className="select select-bordered w-full max-w-xs">
                        <option disabled selected>Select a category</option>
                        <option value="female">salad</option>
                        <option value="male">desert</option>
                        <option value="other">pizza</option>
                        <option value="other">drinks</option>
                        <option value="other">soup</option>

                    </select>

                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddItems;