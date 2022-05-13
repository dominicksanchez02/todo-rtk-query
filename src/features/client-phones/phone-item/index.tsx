import { PhoneItemProps } from '../index-interfaces';
import './index.css';

const PhoneItem = (props: PhoneItemProps): JSX.Element => {
  const { name, clientPhone, onDelete, ...rest } = props
  const handleDelete = () => {
    onDelete && onDelete(rest.rcpid);
  }
  const handleEdit = () => {
    rest.onEdit && rest.onEdit(props);
  }
  const phoneItemElement = (
    <tr>
      <td>{ name }</td>
      <td>{ clientPhone }</td>
      <td>
        <button className="btnEdit" onClick={ handleEdit }>Edit</button>
        <button className="btnDelete" onClick={ handleDelete }>Delete</button>
      </td>
    </tr>
  )

  return phoneItemElement;
}

export default PhoneItem;