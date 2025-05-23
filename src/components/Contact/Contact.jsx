import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import s from "./Contact.module.css";
import toast from "react-hot-toast";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = async () => {
    try {
      await dispatch(deleteContact(contact.id)).unwrap();
      toast.success(`contact  ${contact.name} deleted`);
    } catch (error) {
      toast.error("Error deleting contact. Please try again.");
    }
  };

  return (
    <div className={s.contactItem}>
      {contact.name}: {contact.number}
      <button onClick={handleDelete} className={s.btn}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
