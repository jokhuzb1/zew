import cls from './Products.module.css'
import pop1 from '../../assets/product/dd.jpeg'
import pop2 from '../../assets/product/cd.jpeg'
import { useState } from 'react'
import Spinner from '../../components/spinner/Spinner'
export default function Products() {
  const [loading, setLoading] = useState(false)
  return (
    <div className={cls.products}>

      <div className={cls.container}>
        {!loading && (
          <img src="https://3.downloader.disk.yandex.com/preview/b65266d07cecba8beade0588b0aa907b4471138981be6b521c228682523010b2/inf/KZn15kpMTheuqmw7Urteg_373ZX4NIguH7EqX1J5M3LL2Mw5ZUgYW31ZnLEqX80_aaxfWhOWs5ni-5by06CNEQ%3D%3D?uid=1680697291&filename=dd.jpeg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=1680697291&tknv=v2&size=1672x976"
            alt="poplin fabric"
            onLoadStart={() => setLoading(true)}
            onLoad={() => setLoading(false)}
          />
        )}
        {loading && <Spinner />}
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
        <img src='https://3.downloader.disk.yandex.com/preview/b65266d07cecba8beade0588b0aa907b4471138981be6b521c228682523010b2/inf/KZn15kpMTheuqmw7Urteg_373ZX4NIguH7EqX1J5M3LL2Mw5ZUgYW31ZnLEqX80_aaxfWhOWs5ni-5by06CNEQ%3D%3D?uid=1680697291&filename=dd.jpeg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=1680697291&tknv=v2&size=1672x976'
          alt="poplin fabric"
          onLoadStart={() => setLoading(true)}
          onLoad={() => setLoading(false)}
        />
      </div>
    </div>
  )
}
