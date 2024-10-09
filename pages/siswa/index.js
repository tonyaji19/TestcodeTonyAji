import { useEffect, useState } from "react";
import { getSiswa, deleteSiswa } from "../../utils/api";
import SiswaTable from "../../components/SiswaTable";

const SiswaPage = () => {
  const [siswaList, setSiswaList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await getSiswa();
    setSiswaList(data);
  };

  const handleDelete = async (id) => {
    await deleteSiswa(id);
    fetchData();
  };

  return (
    <div className="">
      <SiswaTable siswaList={siswaList} onDelete={handleDelete} />
    </div>
  );
};

export default SiswaPage;
