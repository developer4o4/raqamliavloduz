import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/contact/')({
  component: ContactPage,
})

function ContactPage() {
  return (
    <div className="w-full p-6 sm:p-8 lg:p-10 bg-white rounded-xl shadow-sm">
      <div className="max-w-4xl mx-auto space-y-10">
        <section className="space-y-4">
          <p className="text-sm uppercase tracking-[0.24em] text-primary">Aloqa</p>
          <h1 className="text-3xl sm:text-4xl font-semibold">Biz bilan bog'laning</h1>
          <p className="text-base leading-7 text-zinc-600">
            Savollaringiz bo‘lsa yoki yangi hamkorlik haqida fikr yuritmoqchi bo‘lsangiz, qulay yo‘llar orqali bizga murojaat qiling.
          </p>
        </section>

        <section className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-3xl border border-zinc-200 p-6 space-y-4">
            <h2 className="text-xl font-semibold">Manzil</h2>
            <p className="text-zinc-600 leading-7">Toshkent, O‘zbekiston</p>
          </div>
          <div className="rounded-3xl border border-zinc-200 p-6 space-y-4">
            <h2 className="text-xl font-semibold">Telefon</h2>
            <p className="text-zinc-600 leading-7">+998 93 715 14 41</p>
          </div>
        </section>

        <section className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-3xl border border-zinc-200 p-6 space-y-4">
            <h2 className="text-xl font-semibold">Email</h2>
            <p className="text-zinc-600 leading-7">info@raqamliavlod.uz</p>
          </div>
          <div className="rounded-3xl border border-zinc-200 p-6 space-y-4">
            <h2 className="text-xl font-semibold">Ijtimoiy tarmoqlar</h2>
            <p className="text-zinc-600 leading-7"><a href="https://t.me/digitalgeneration_uz">Telegram</a>, <a href="https://www.instagram.com/DGUzbekistan">Instagram</a>, <a href="https://youtube.com/@digitalgenerationuzbekistan?si=kBJGERAGhTmH3zMv">Youtube</a>, <a href="http://facebook.com/digitalgeneration.uz">Facebook</a></p>
          </div>
        </section>

        {/* <section className="rounded-3xl border border-zinc-200 p-6 space-y-4">
          <h2 className="text-2xl font-semibold">Biz bilan bog'lanish</h2>
          <p className="text-zinc-600 leading-7">
            Agar kurslar, obuna yoki hisob bilan bog‘liq savollaringiz bo‘lsa, bizga yozing. Jamoamiz tez orada siz bilan bog‘lanadi.
          </p>
          <div className="space-y-3 text-zinc-600 leading-7">
            <p><strong>Email:</strong> info@raqamliavlod.uz</p>
            <p><strong>Telefon:</strong> +998 93 715 14 41</p>
          </div>
        </section> */}
      </div>
    </div>
  )
}
