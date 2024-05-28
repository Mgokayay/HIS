import axios from "axios";
import { useForm } from "react-hook-form";

const Patient = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axios
      .post("http://localhost:8080/api/patient", data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("error", error);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="w-[200px] py-2">
        <label>Full Name</label>
        <input
          id="fullName"
          {...register("fullName", { required: "this field is required" })}
        />
        {errors.fullName && <p>{errors.fullName.message}</p>}
      </div>
      <div className="w-[200px] py-2">
        <label>Date</label>
        <input
          id="date"
          {...register("date", { required: "this field is required" })}
        />
        {errors.date && <p>{errors.date.message}</p>}
      </div>
      <div className="w-[200px] py-2">
        <label>Gender</label>
        <input
          id="gender"
          {...register("gender", { required: "this field is required" })}
        />
        {errors.gender && <p>{errors.gender.message}</p>}
      </div>
      <div className="w-[200px] py-2">
        <label>TCKN</label>
        <input
          id="tckn"
          {...register("tckn", { required: "this field is required" })}
        />
        {errors.tckn && <p>{errors.tckn.message}</p>}
      </div>
      <button
        className="bg-black hover:bg-green-700 hover:scale-105 border mt-4 p-2"
        type="submit"
      >
        Save
      </button>
    </form>
  );
};

export default Patient;
