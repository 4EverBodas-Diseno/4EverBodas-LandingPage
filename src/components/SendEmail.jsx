import { useState } from "react";

const SendEmail = () => {
  const [email, setEmail] = useState("");
  const sendEmail = async (e) => {
    e.preventDefault();
    //Regex for email
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regex.test(email)) {
      alert("Please enter a valid email");
      return;
    }
    await fetch("https://connect.mailerlite.com/api/subscribers", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${import.meta.env.PUBLIC_API_MAILER_LITE}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email: email,
        groups: [import.meta.env.PUBLIC_API_GROUP],
      }),
    }).then((res) => {
      console.log(res);
    });
    alert("Successfully added to waitlist");
    setEmail("");
  };
  return (
    <>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="example@gmail.com"
        className="w-full h-14 bg-white p-2 border border-white rounded-3xl"
      />

      <button
        onClick={sendEmail}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary text-white px-8 py-2 rounded-xl"
      >
        Suscríbete
      </button>
    </>
  );
};

export default SendEmail;
