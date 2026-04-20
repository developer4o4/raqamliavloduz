import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about/')({
  component: AboutPage,
})

function AboutPage() {
  return (
    <div className="w-full p-6 sm:p-8 lg:p-10 bg-white rounded-xl shadow-sm">
      <div className="max-w-4xl mx-auto space-y-10">
        <section className="space-y-4">
          <p className="text-sm uppercase tracking-[0.24em] text-primary">Biz haqimizda</p>
          <h1 className="text-3xl sm:text-4xl font-semibold">Raqamli ta'limning yangi davri</h1>
          <p className="text-base leading-7 text-zinc-600">
            Biz raqamliavlod.uz orqali sizga sifatli ta'lim, amaliy kurslar va mustahkam onlayn hamjamiyat taqdim etamiz. Maqsadimiz o‘zbek yoshlariga zamonaviy, oson tushunarli va interaktiv ta'lim platformasini yetkazishdir.
          </p>
        </section>

        <section className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-3xl border border-zinc-200 p-6 space-y-4">
            <h2 className="text-xl font-semibold">Vizyonimiz</h2>
            <p className="text-zinc-600 leading-7">
              Innovatsion ta'lim platformasi yaratish va har bir o‘quvchiga raqamli sohada muvaffaqiyatga erishish uchun zarur bilimlarni yetkazish.
            </p>
          </div>
          <div className="rounded-3xl border border-zinc-200 p-6 space-y-4">
            <h2 className="text-xl font-semibold">Missiyamiz</h2>
            <p className="text-zinc-600 leading-7">
              O‘zbek tilidagi eng yaxshi ta'lim kontentini jamlab, har bir xohlagan inson uchun oson va arzon ta'lim imkoniyatini yaratish.
            </p>
          </div>
        </section>

        <section className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-3xl border border-zinc-200 p-6 space-y-4">
            <h2 className="text-xl font-semibold">Qanday ishlaymiz</h2>
            <p className="text-zinc-600 leading-7">
              Har bir kurs real amaliyotga yo‘naltirilgan va zamonaviy texnologiyalar asosida tuzilgan. Uzluksiz qo‘llab-quvvatlash va interaktiv materiallar orqali bilimlarni mustahkamlaymiz.
            </p>
          </div>
          <div className="rounded-3xl border border-zinc-200 p-6 space-y-4">
            <h2 className="text-xl font-semibold">Nega biz</h2>
            <p className="text-zinc-600 leading-7">
              Sifatli kontent, o‘zbekcha taqdimot va qulay o‘quv tajribasi. Biz o‘quvchilarga nafaqat nazariy bilim, balki real dunyo uchun zarur ko‘nikmalar ham beramiz.
            </p>
          </div>
        </section>

        <section className="rounded-3xl border border-zinc-200 p-6 space-y-4">
          <h2 className="text-2xl font-semibold">Bizning yondashuvimiz</h2>
          <ul className="list-disc list-inside space-y-3 text-zinc-600 leading-7">
            <li>Interaktiv kurslar va real misollar</li>
            <li>O‘zbek tilida tushunarli darslar</li>
            <li>Har bir kurs bosqichma-bosqich tuzilgan</li>
            <li>Doimiy yangilanish va yangi yo‘nalishlar</li>
          </ul>
        </section>
      </div>
    </div>
  )
}
