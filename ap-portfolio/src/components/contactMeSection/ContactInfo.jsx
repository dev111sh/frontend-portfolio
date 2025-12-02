import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4 text-white">
      <SingleInfo text="adesioyeray@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+234 809 4714 497" Image={FiPhone} />
      <SingleInfo text="Lagos Nigeria" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
