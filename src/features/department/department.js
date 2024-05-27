import axios from "axios";
import { useForm } from "react-hook-form";

const Department = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axios
      .post("http://localhost:8080/api/department", data)
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
          id="name"
          {...register("name", { required: "this field is required" })}
        />
        {errors.name && <p>{errors.name.message}</p>}
      </div>

      <button type="submit">save</button>
    </form>
  );
};

export default Department;
