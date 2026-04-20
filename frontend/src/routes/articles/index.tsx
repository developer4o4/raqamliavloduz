import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/articles/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="w-full p-6 sm:p-8 lg:p-10 bg-white rounded-xl shadow-sm">
      <div className="max-w-4xl mx-auto space-y-10">
        <section className="space-y-4">
          <p className="text-sm uppercase tracking-[0.24em] text-primary">Maqolalar</p>
          <h1 className="text-3xl sm:text-4xl font-semibold">Foydali maqolalar</h1>
          <p className="text-base leading-7 text-zinc-600">
            Raqamli texnologiyalar, dasturlash va ta'lim sohasidagi eng so'nggi maqolalar va yangiliklar.
          </p>
        </section>

        <section className="rounded-3xl border border-zinc-200 p-6 space-y-4">
          <h2 className="text-2xl font-semibold">Maqolalar tez orada qo'shiladi</h2>
          <p className="text-zinc-600 leading-7">
            Biz maqolalar bo'limini tez orada boyitamiz. Bu yerda siz:
          </p>
          <ul className="list-disc list-inside space-y-3 text-zinc-600 leading-7">
            <li>Dasturlash tillari haqida maqolalar o'qishingiz mumkin</li>
            <li>Raqamli ta'lim yangiliklarini bilib olishingiz mumkin</li>
            <li>Mualliflarning tajribalarini o'rganishingiz mumkin</li>
            <li>Foydali maslahatlar va qo'llanmalar topishingiz mumkin</li>
          </ul>
        </section>
      </div>
    </div>
  )
}
