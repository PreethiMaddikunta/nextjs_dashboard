import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Public_Sans } from 'next/font/google'
import css from './Layout.module.css';
import Sidebar from './components/Sidebar/Sidebar';
import moment from 'moment';
import { BiSearch } from 'react-icons/bi';

const inter = Inter({ subsets: ['latin'] })
const publicSans = Public_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <div id="dashboard">
        <div className={css.container}>
          <Sidebar />

          <div className={css.dashboard}>
            <div className={css.topBaseGradients}>
              <div className="gradient-red"></div>
              <div className="gradient-orange"></div>
              <div className="gradient-blue"></div>
            </div>


            <div className={css.header}>

              <span>{moment().format("dddd, Do MMM YYYY")}</span>

              <div className={css.searchBar}>
                <BiSearch size={20} />
                <input type="text" placeholder="Search" />
              </div>

              <div className={css.profile}>
                <img src="https://cdn-icons-png.flaticon.com/256/4825/4825112.png" alt="person image" />
                <div className={css.details}>
                  <span>Preeti Sharma</span>
                  <span>preetisharma@gmail.com</span>
                </div>
              </div>
            </div>
            <body className={publicSans.className}>{children}</body>
          </div>
        </div>
      </div>

    </div>
  )
}
