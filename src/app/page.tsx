import ServerComponent from './ServerComponent'
import ClientComponent from './ClientComponent'
import Parent_RSC from './Parent_RSC'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container">
        <div className="column">
          <ServerComponent />
          <ClientComponent />
        </div>
        <div className="column">
          <Parent_RSC />
        </div>
      </div>

    </main>
  )
}
