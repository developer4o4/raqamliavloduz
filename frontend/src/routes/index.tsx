import BreakingNews from '@/components/BreakingNews'
import NewCourses from '@/components/NewCourses'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <>
      <BreakingNews />
      <div className="mb-12"></div>
      <NewCourses />
    </>
  )
}
