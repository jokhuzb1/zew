import bg from '../../assets/a.jpg'
import cls from './Export.module.css'
export default function Export() {
  return (
    <div className={cls.exportDetails}>
      <div className={cls.exportRow}>
        <span>  <h1>70 tons </h1> <small> of export per month</small></span>
        <span><h1>200 +</h1>  <small>Highly trained employees</small></span>
        <span><h1>10+</h1>  <small>Export countries</small></span>
      </div>
      <div className={cls.exportCol}>
        <ul>
          <li>Kazakstan</li>
          <li>Kyrgyzstan</li>
          <li>Tadjikistan</li>
          <li>Polan</li>
          <li>Latvia</li>
          <li>Estonia</li>
        </ul>
        <ul>
          <li>Central Asia</li>
          <li>Suth East Asia</li>
          <li>Europe</li>
          <li>Eastern Europe</li>
          <li>Northern Europe</li>
        </ul>
      </div>
    </div>
  )
}
