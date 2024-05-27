import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "../../features/common/headerSlice";

import Doctor from "../../features/doctor/doctor";

function InternalPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: "Doctor" }));
  }, []);

  return <Doctor />;
}

export default InternalPage;
