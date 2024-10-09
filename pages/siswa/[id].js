import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import SiswaForm from "../../components/SiswaForm";
import { getSiswaById, updateSiswa } from "../../utils/api";

const EditSiswaPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [siswa, setSiswa] = useState(null);

  useEffect(() => {
    if (id) {
      fetchSiswa();
    }
  }, [id]);

  const fetchSiswa = async () => {
    const data = await getSiswaById(id);
    setSiswa(data);
  };

  const handleSubmit = async (updatedSiswa) => {
    await updateSiswa(id, updatedSiswa);
    router.push("/siswa");
  };

  return (
    <div className="">
      {siswa && <SiswaForm onSubmit={handleSubmit} initialData={siswa} />}
    </div>
  );
};

export default EditSiswaPage;
