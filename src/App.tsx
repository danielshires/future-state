import { Link } from 'react-router-dom'
import Breadcrumb from './Components/Breadcrumb'
import Timer from './Components/Timer'

function App() {
  return (
    <div className="flex flex-col justify-between h-screen p-4 md:p-16 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-50">
      <div className="flex row gap-4 items-center">
        <Breadcrumb name={'Home'} route={'/'} /> /
        <Breadcrumb name={'Future state'} route={'/future-state'} />
      </div>
      <div id="timer" className="flex">
        <Timer />
      </div>
      <div id="intro" className="font-serif text-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="">
          <p className="mb-2">This is a promise.</p>
          <p className="mb-2">It's a deadline, a brief, a map, a status check, a time-capsule.</p>
          <p className="mb-2">
            It's an open letter to my community, a statement of intent, a challenge for myself and
            those around me to observe.
          </p>
          <p className="mb-2">One-part action, two-parts ambition.</p>
          <p className="mb-2">
            It's the time I have left before my predicted life expectancy, and a list of things I
            want to be and achieve in life.
          </p>
          <p className="mb-2">
            It's something I can reflect on next week, next month, next year and measure against my
            short-term and long-term goals. Liable to change, but never far from the truth.
          </p>
          <p className="mb-2">
            <Link className="underline underline-offset-4 hover:text-blue-600" to={`future-state`}>
              Welcome to my <span className="font-display">future state</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
