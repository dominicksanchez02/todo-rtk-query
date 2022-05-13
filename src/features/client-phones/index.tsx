import { useState } from 'react';
import { Link } from 'react-router-dom';
import PhoneList from './phone-list';
import Form from './form';
import { toast } from 'react-toastify';
import { useGetPhonesQuery, useAddPhoneMutation, useEditPhoneMutation, useDeletePhoneMutation } from './slice';
import { Error, Loader } from '../../ui';
import { PhoneItemProps } from './index-interfaces';
import { InputProps } from './form/index-interfaces';
import './index.css';

const ClientPhones = (): JSX.Element => {
    const { data, isLoading, error, refetch } = useGetPhonesQuery(undefined, {
      refetchOnMountOrArgChange: true
    });

    const [ phone, setPhone ] = useState<PhoneItemProps>();
    const [ addPhone ] = useAddPhoneMutation();
    const [ editPhone ] = useEditPhoneMutation();
    const [ deletePhone ] = useDeletePhoneMutation();
    const handleFormSubmit = (data: InputProps) => {
      const payload = {
        ...data,
        extension: null,
        phoneType: 'client',
        rid: '6b1bf2af-be65-11e2-97ab-00ff685223c2'
      }

      data.rcpid ? handleEditMutation(payload) : handleAddMutation(payload);
    }
    const handleAddMutation = (payload: InputProps) => {
      addPhone(payload).unwrap()
        .then(() => {
          toast(`Phone was added!`, {
            autoClose: false,
            position: 'top-right'
          });
        }).catch(({ data: { message } }) => {
          toast(`Error: ${ message }`, {
            autoClose: false,
            position: 'top-right'
          });
        });
    }
    const handleEditMutation = (payload: InputProps) => {
      editPhone(payload).unwrap()
        .then(() => {
          toast(`Phone was saved!`, {
            autoClose: false,
            position: 'top-right'
          });
        }).catch(({ data: { message } }) => {
          toast(`Error: ${ message }`, {
            autoClose: false,
            position: 'top-right'
          });
        })
    }
    const handleEdit = (phone: PhoneItemProps) => {
      setPhone(phone);
    }
    const handleDelete = (id: string) => {
      deletePhone(id);
    }
    const clientPhoneElement = (
      <>
        <Form onSubmit={ handleFormSubmit } phone={ phone }/>
        { error ? <Error /> : '' }
        { isLoading ? <Loader /> : '' }
        { data
          ? <PhoneList clientPhoneList={ data?.clientPhoneList } onEdit={ handleEdit } onDelete={ handleDelete } /> 
          : '' 
        }
        <Link to="/counter">Counter</Link>
      </>
    )

    return clientPhoneElement;
  }
  
  export default ClientPhones;