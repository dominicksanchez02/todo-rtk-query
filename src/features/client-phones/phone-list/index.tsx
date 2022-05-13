

import PhoneItem from '../phone-item';
import { PhoneListProps, PhoneItemProps } from '../index-interfaces';
import './index.css';

const PhoneList = ({ clientPhoneList, onDelete, onEdit }: PhoneListProps): JSX.Element => {
  const handleDelete = (id: string) => {
    onDelete && onDelete(id);
  }
  const handleEdit = (phone: PhoneItemProps) => {
    onEdit && onEdit(phone);
  }
  const phoneListElement = (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Phone Number</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        { clientPhoneList.map((phone) => (
          <PhoneItem 
            { ...phone }
            key={ phone.rcpid }
            onEdit={ handleEdit }
            onDelete= { handleDelete }
          />
        ))}
      </tbody>
    </table>
  )

  return phoneListElement;
}

export default PhoneList;
