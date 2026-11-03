import { useState } from "react"

type formDataType = {
  name: string;
  username: string;
  email: string;
  phone: string;
  password: string;
  confirm_password: string;
}

export const App = () => {

  const [formData, setFormData] = useState<formDataType>({
    name: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    confirm_password: ""
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\d{10}$/;

    if (!formData.name.trim()) {
      return alert("Please enter your name");
    }

    if (!formData.username.trim()) {
      return alert("Please enter your username");
    }

    if (!emailPattern.test(formData.email)) {
      return alert("Please enter a valid email address");
    }

    if (!phonePattern.test(formData.phone)) {
      return alert("Please enter a valid 10-digit phone number");
    }

    if (formData.password.length < 8) {
      return alert("Password must contain at least 8 characters");
    }

    if (formData.password !== formData.confirm_password) {
      return alert("Passwords do not match");
    }

    console.log(formData);
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prevState => {
      return {
        ...prevState, [event.target.name]: event.target.value
      }
    });
  }

  return <div className="flex justify-center mt-5">
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-100 shadow-md p-8 rounded-md">
      <p className="text-center text-2xl font-bold font-mono">Form Validation</p>
      <input onChange={handleChange} value={formData.name} className="p-2 border-2 border-gray-500 outline-0 rounded-md" type="text" name="name" placeholder="Ex: john" />
      <input onChange={handleChange} value={formData.username} className="p-2 border-2 border-gray-500 outline-0 rounded-md" type="text" name="username" placeholder="Ex: johndoe" />
      <input onChange={handleChange} value={formData.email} className="p-2 border-2 border-gray-500 outline-0 rounded-md" type="email" name="email" placeholder="Enter the email" />
      <input onChange={handleChange} value={formData.phone} className="p-2 border-2 border-gray-500 outline-0 rounded-md" type="tel" name="phone" placeholder="Enter the phone number" />
      <input onChange={handleChange} value={formData.password} className="p-2 border-2 border-gray-500 outline-0 rounded-md" type="password" name="password" placeholder="Enter the password" />
      <input onChange={handleChange} value={formData.confirm_password} className="p-2 border-2 border-gray-500 outline-0 rounded-md" type="password" name="confirm_password" placeholder="Enter the password again" />
      <button type="submit" className="bg-green-500 text-white w-full rounded-md cursor-pointer p-2">Submit</button>
    </form>
  </div>
}