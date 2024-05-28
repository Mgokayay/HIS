import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import PlusIcon from "@heroicons/react/24/outline/PlusIcon";
import TrashIcon from "@heroicons/react/24/outline/TrashIcon";

const ProfileSettings = () => {
  const [modal, setModal] = useState(false);
  const [data, setData] = useState([]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleModal = () => {
    setModal(!modal);
  };

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
        setData((prevData) => [...prevData, response.data]); // Yeni veriyi state'e ekle
        reset(); // Formu sıfırla
        setModal(false); // Modalı kapat
      })
      .catch((error) => {
        console.error("error", error);
      });
  };

  const remove = (id) => {
    if (window.confirm("Are you sure you want to delete this visit?")) {
      axios
        .delete(`http://localhost:8080/api/patientvisit/${id}`)
        .then((response) => {
          console.log(response.data);
          setData((prevData) => prevData.filter((visit) => visit.id !== id)); // Silinen veriyi state'den çıkar
        })
        .catch((error) => {
          console.error("error", error);
        });
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/patientvisit")
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("error", error);
      });
  }, []);

  return (
    <>
      <div>
        {modal && (
          <form
            className="absolute flex flex-col left-[40%] top-[35%] border-2 bg-white w-auto h-auto items-center"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex gap-4 m-2">
              <label className="text-gray-600">Notes</label>
              <input
                className="bg-gray-600"
                id="notes"
                {...register("notes", { required: "this field is required" })}
              />
              {errors.notes && <p>{errors.notes.message}</p>}
            </div>
            <div className="flex gap-4 m-2">
              <label className="text-gray-600">Visit Date</label>
              <input
                className="bg-gray-600"
                id="visitDate"
                {...register("visitDate", {
                  required: "this field is required",
                })}
              />
              {errors.visitDate && <p>{errors.visitDate.message}</p>}
            </div>
            <div className="flex gap-4 m-2">
              <label className="text-gray-600">Department</label>
              <input
                className="bg-gray-600"
                id="department"
                {...register("department", {
                  required: "this field is required",
                })}
              />
              {errors.department && <p>{errors.department.message}</p>}
            </div>
            <div className="flex gap-4 m-2">
              <label className="text-gray-600">Doctor</label>
              <input
                className="bg-gray-600"
                id="doctor"
                {...register("doctor", { required: "this field is required" })}
              />
              {errors.doctor && <p>{errors.doctor.message}</p>}
            </div>
            <div className="flex gap-4 m-2">
              <label className="text-gray-600">Patient</label>
              <input
                className="bg-gray-600"
                id="patient"
                {...register("patient", { required: "this field is required" })}
              />
              {errors.patient && <p>{errors.patient.message}</p>}
            </div>

            <button
              className="bg-gray-600 hover:bg-green-700 hover:scale-105 border m-2 p-2"
              type="submit"
            >
              Save
            </button>
          </form>
        )}
      </div>
      <div>
        <button className="border flex p-2" onClick={handleModal}>
          <PlusIcon className={"fill-current w-6 h-6 "} />
          New Patient
        </button>
        <div className="h-[calc(100vh_-_170px)] overflow-y-auto">
          {data.map((visit) => (
            <div
              key={visit.id}
              className="flex w-[720px] justify-between my-4 p-2 border"
            >
              <div className="">
                <p className="border-b-2">Patient</p>
                <p>{visit.patientName}</p>
              </div>
              <div>
                <p>Department</p>
                <p>{visit.departmentName}</p>
              </div>
              <div>
                <p>Doctor</p>
                <p>{visit.doctorName}</p>
              </div>
              <div className="w-[200px] overflow-hidden">
                <p>Notes</p>
                <p>{visit.notes}</p>
              </div>
              <div className="w-[76px]">
                <p>Visit Date</p>
                <p>{visit.visitDate}</p>
              </div>
              <button
                className="flex items-center"
                onClick={() => remove(visit.id)}
              >
                <TrashIcon className={"fill-current w-6 h-6 "} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProfileSettings;
