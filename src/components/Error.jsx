

export default function Error({title, messgae}) {
  return (
    <div className='error'>
      <h2>{title}</h2>
      <p>{messgae}</p>
    </div>
  )
}
