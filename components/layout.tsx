import { PropsWithChildren } from 'react'
import Header from './header'

export default function Layout(props: PropsWithChildren) {
  return (
    <div>
      <Header />
      <main>
        {props.children}
      </main>
    </div>
  )
}
