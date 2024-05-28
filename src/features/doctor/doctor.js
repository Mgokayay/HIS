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
    <form className="w-[200px] py-2" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Name</label>
        <input
          id="name"
          {...register("name", { required: "this field is required" })}
        />
        {errors.name && <p>{errors.name.message}</p>}
      </div>
      <div>
        <label>Department</label>
        <input
          id="department"
          {...register("department", { required: "this field is required" })}
        />
        {errors.department && <p>{errors.department.message}</p>}
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

export default Doctor;
