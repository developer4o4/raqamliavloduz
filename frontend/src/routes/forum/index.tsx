import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/forum/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="w-full p-6 sm:p-8 lg:p-10 bg-white rounded-xl shadow-sm">
      <div className="max-w-4xl mx-auto space-y-10">
        <section className="space-y-4">
          <p className="text-sm uppercase tracking-[0.24em] text-primary">Forum</p>
          <h1 className="text-3xl sm:text-4xl font-semibold">Hamjamiyat</h1>
          <p className="text-base leading-7 text-zinc-600">
            Bu yerda siz o'quvchilar va o'qituvchilar bilan fikr almashishingiz, savollar berishingiz va javob olishingiz mumkin.
          </p>
        </section>

        <section className="rounded-3xl border border-zinc-200 p-6 space-y-4">
          <h2 className="text-2xl font-semibold">Forum tez orada ochiladi</h2>
          <p className="text-zinc-600 leading-7">
            Biz forum bo'limini tez orada ishga tushiramiz. Bu yerda siz:
          </p>
          <ul className="list-disc list-inside space-y-3 text-zinc-600 leading-7">
            <li>Kurslar haqida savol berishingiz mumkin</li>
            <li>Boshqa o'quvchilar bilan tajriba almashishingiz mumkin</li>
            <li>O'qituvchilardan maslahat olishingiz mumkin</li>
            <li>Yangiliklar va e'lonlar haqida ma'lumot olishingiz mumkin</li>
          </ul>
        </section>
      </div>
    </div>
  )
}
