import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState, useEffect } from 'react'


const inter = Inter({ subsets: ['latin'] })


export default function Home() {

  const [darktheme, setDarktheme] = useState(undefined);

  const [isdark,setisdark]=useState(undefined);

  const handleToggle = (e) => {
    setDarktheme(e.target.checked);
  };

  useEffect(() => {
    if (darktheme !== undefined) {
      if (darktheme) {
        document.documentElement.setAttribute("data-theme", "dark");
        window.localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.removeAttribute("data-theme");
        window.localStorage.setItem("theme", "light");
      }
    }

    if(window.localStorage.getItem("theme")==="dark"){
      setisdark(true)
    }else if(window.localStorage.getItem("theme")==="light"){
      setisdark(false);
    }
  }, [darktheme]);

  return (
    <div>
      <div className='container'>
        <nav>
          <div className='title'>私のポートフォリオ</div>
          <div>
            <form>
              <label className='switch'>
                <input type='checkbox' onChange={handleToggle} checked={isdark} />
                <span className='slider'></span>
              </label>
            </form>
          </div>
        </nav>

        <section>
          <div className='content'>
            <h1>ShinCodeのポートフォリオ🚀</h1>
            <h3>
              私はプログラミングチュートリアル動画をYoutubeとUdemyで更新しています🌳
            </h3>
            <p>
              投稿内容はフロントエンドからバックエンドまで幅広く動画を投稿しています。
              エンジニアとして幅広い知識をキャッチアップしたい人のためのチャンネルです☕
            </p>
            <button className='primary-button'>お問い合わせ</button>
          </div>
        </section>

      </div>
    </div>
  )
}
