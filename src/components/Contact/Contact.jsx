import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <div>
      {contact.name}: {contact.number}
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Contact;
