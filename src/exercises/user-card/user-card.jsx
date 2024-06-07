import './user.css';

export function UserCard(props) {
  const { address, phoneNumber, age, name } = props;

  console.log(address, phoneNumber, age, name);

  return (
    <div className='card'>
      <h2 className='name'>{name}</h2>
      <div className='body'>
        <div className='label'>Age:</div>
        <div>{age}</div>
        <div className='label'>Phone:</div>
        <div>{phoneNumber}</div>
        <div className='label'>Address:</div>
        <div>{address}</div>
      </div>
    </div>
  );
}
