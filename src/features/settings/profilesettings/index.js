import axios from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

const ProfileSettings = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const formattedData = {
      notes: data.notes,
      visitDate: data.visitDate,
      department: { id: data.department },
      doctor: { id: data.doctor },
      patient: { id: data.patient },
    };
    axios
      .post("http://localhost:8080/api/patientvisit", formattedData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("error", error);
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/patientvisit")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("error", error);
      });
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Name</label>
        <input
          id="notes"
          {...register("notes", { required: "this field is required" })}
        />
        {errors.notes && <p>{errors.notes.message}</p>}
      </div>
      <div>
        <label>Name</label>
        <input
          id="visitDate"
          {...register("visitDate", { required: "this field is required" })}
        />
        {errors.visitDate && <p>{errors.visitDate.message}</p>}
      </div>
      <div>
        <label>Name</label>
        <input
          id="department"
          {...register("department", { required: "this field is required" })}
        />
        {errors.department && <p>{errors.department.message}</p>}
      </div>
      <div>
        <label>Name</label>
        <input
          id="doctor"
          {...register("doctor", { required: "this field is required" })}
        />
        {errors.doctor && <p>{errors.doctor.message}</p>}
      </div>
      <div>
        <label>Name</label>
        <input
          id="patient"
          {...register("patient", { required: "this field is required" })}
        />
        {errors.patient && <p>{errors.patient.message}</p>}
      </div>

      <button type="submit">save</button>
    </form>
  );
};

export default ProfileSettings;
