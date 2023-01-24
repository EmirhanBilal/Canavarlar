import Card from '../card/card.component'
import './card-list.styles.css'

const CardList = ({ canavarlar }) => {
  // const { canavarlar } = props
  return (
    <div className='card-list'>
      {canavarlar.map((canavar) => {
        return <Card canavar={canavar} />
      })}
    </div>
  )
}

export default CardList
