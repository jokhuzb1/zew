import React from 'react'
import CarouselContainer from '../../components/carousel/CarouselContainer'
import Content from '../../components/content/Content'
import Export from '../../components/export/Export'
import cls from './Home.module.css'


export default function Home() {


  return (
    <div className={cls.home}>
      <CarouselContainer />
      <Content img='https://3.downloader.disk.yandex.com/preview/7804bc3faeec2dd09c2491f3b2749874701952cfa65b231b168fee41590d5a05/inf/YkGc2LdEedHcfZUUA5tuzv373ZX4NIguH7EqX1J5M3Jb6CZgQlwjwmItzuaGpR_OG2gX9-EQ81FIoD5vtoK5tA%3D%3D?uid=1680697291&filename=d.JPG&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=1680697291&tknv=v2&size=1672x976' />
      <Export />
      <Content img='https://2.downloader.disk.yandex.com/preview/79ff3126fdd12b089c4762724c46d93f174e58976306d919f6b3ee19ef2ce3c4/inf/ZdWS1tC4Ain7_BVsmrjec59r62ZpBMQ5w9Sgay6k8CqFSFlX4Zj4XCyf4QXo4gRIXAIp720ryQEAFG7PcF3Rzw%3D%3D?uid=1680697291&filename=p2.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=1680697291&tknv=v2&size=1672x976' />
    </div>
  )
}
