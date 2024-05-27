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
      <div>
        <label>Name</label>
        <input
          id="fullName"
          {...register("fullName", { required: "this field is required" })}
        />
        {errors.fullName && <p>{errors.fullName.message}</p>}
      </div>
      <div>
        <label>Name</label>
        <input
          id="date"
          {...register("date", { required: "this field is required" })}
        />
        {errors.date && <p>{errors.date.message}</p>}
      </div>
      <div>
        <label>Name</label>
        <input
          id="gender"
          {...register("gender", { required: "this field is required" })}
        />
        {errors.gender && <p>{errors.gender.message}</p>}
      </div>
      <div>
        <label>Name</label>
        <input
          id="tckn"
          {...register("tckn", { required: "this field is required" })}
        />
        {errors.tckn && <p>{errors.tckn.message}</p>}
      </div>
      <button type="submit">save</button>
    </form>
  );
};

export default Patient;
