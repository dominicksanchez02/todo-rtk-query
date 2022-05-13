import ClientPhones from '../../features/client-phones';
import './index.css';

const ClientPhonesPage = (): JSX.Element => {
  const clientPhonesElement = (
    <div className="container">
      <h1>Client Phone Editor</h1>
      <ClientPhones />
   </div>
  )

  return clientPhonesElement;
}

export default ClientPhonesPage;