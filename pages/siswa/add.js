import { useRouter } from "next/router";
import SiswaForm from "../../components/SiswaForm";
import { addSiswa } from "../../utils/api";

const AddSiswaPage = () => {
  const router = useRouter();

  const handleSubmit = async (newSiswa) => {
    await addSiswa(newSiswa);
    router.push("/siswa");
  };

  return (
    <div className="">
      <SiswaForm onSubmit={handleSubmit} />
    </div>
  );
};

export default AddSiswaPage;
