import react, { useState } from "react";

const useForm = (initial_state) => {
  const [form, setForm] = useState(initial_state);
  return {
    form,
    setForm,
    handleChange: (e) => {
      setForm({ ...form, [e.target.name]: e.target.value });
    },
    handleThumbnailChange: (e) => {
      setForm({ ...form, [e.target.name]: e.target.files[0] });
    },
  };
};

export default useForm;
