import cls from './Spinner.module.css'
export default function Spinner() {
  return (
    <div className={cls.spinner}>
      <div className={cls.ldshourglass}></div>
    </div>
  )
}
