import axios from "axios";
import { useForm } from "react-hook-form";

const Doctor = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const formattedData = {
      name: data.name,
      department: {
        id: data.department,
      },
    };
    axios
      .post("http://localhost:8080/api/doctor", formattedData)
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
      <div>
        <label>Name</label>
        <input
          id="department"
          {...register("department", { required: "this field is required" })}
        />
        {errors.department && <p>{errors.department.message}</p>}
      </div>

      <button type="submit">save</button>
    </form>
  );
};

export default Doctor;
