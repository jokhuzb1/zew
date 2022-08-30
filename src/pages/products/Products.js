import cls from './Products.module.css'
import pop1 from '../../assets/product/dd.jpeg'
import pop2 from '../../assets/product/cd.jpeg'
export default function Products() {
  return (
    <div className={cls.products}>

      <div className={cls.container}>
        <img src={pop1} alt="poplin fabric" />
        <div className={cls.description}>
          <h2>Product Details and Sizing</h2>
          <ul>
            <li>Weight:125g (±5) </li>
            <li>number of threads 206X154 width (sm):240</li>
            <li>Open end Neo threads CD 30/1</li>
            <li>Ending color:Gray</li>
          </ul>

        </div>
      </div>
      <div className={cls.container}>
        <div className={cls.description}>
          <h2>Manufacturing and Performance</h2>
          <ul>
            <li>Up to 70 tonns per month</li>
            <li>Highly skilled employee</li>
            <li>100% cotton / mixed with polyster</li>
            <li>Latest technology of 2022</li>
            <li>Wiltop-tex Air jet loom 9100</li>
          </ul>
        </div>
        <img src={pop2} alt="poplin fabric" />
      </div>
    </div>
  )
}
