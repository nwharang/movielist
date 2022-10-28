import { useAuth } from 'hooks/useAuth'
import Background from '../../assets/logo512.png'


export default function About() {
    const auth = useAuth()
    return (
        <div className="container mx-auto flex pt-20 p-2 md:p-10 md:pt-24 w-full min-h-[70vh] text-justify gap-5 ">
            <div className='max-auto flex flex-col flex-1 rounded-3xl shadow-2xl border-2 shadow-black/80 border-purple-900/30 md:p-5 text-white leading-7 indent-8 py-3'>
                <p className='font-bold text-lg p-3 pl-5 indent-0 underline '>
                    Paragraph
                </p>
                <p className='px-4 py-3'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis cupiditate reiciendis sequi, nesciunt qui, quia quae consectetur a porro maiores aliquid dolores illo? Obcaecati ipsum at hic quisquam odit nam aut, pariatur culpa illo recusandae ab modi voluptatum repellendus maiores officiis quos sunt magnam porro saepe voluptas sed fuga voluptate minus harum? Quos voluptate, eaque, officiis reprehenderit repudiandae inventore nisi expedita eligendi rem voluptatem est. Velit temporibus officia reprehenderit error nostrum? Accusamus voluptate dolorem doloremque. Porro delectus nulla distinctio cumque deserunt, nam saepe incidunt? Temporibus vero sapiente aut quis officiis fuga necessitatibus! Architecto ad alias adipisci unde, sint aliquid expedita.
                </p>
                <p className='px-4 py-3'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum error eos impedit maxime commodi perferendis possimus optio sint quibusdam pariatur quis praesentium enim aperiam, officia aliquid debitis, cum dolorem neque omnis sunt, sed natus. Libero, minus pariatur ea quaerat autem adipisci, aliquid cum, ipsam debitis voluptatem placeat error quia sapiente ratione quae magni earum magnam eos impedit unde! Hic nam maxime, blanditiis veniam fuga dignissimos qui magnam laudantium officiis aut nisi vitae dolores voluptatibus non inventore sunt totam at. Magni vero quidem maiores, beatae illum, ex commodi eum autem illo perspiciatis deleniti et. Natus error laboriosam animi nulla id deserunt autem, itaque aliquid quae impedit accusantium dolorem incidunt? Possimus, alias? Odit totam enim minima esse! Ab maxime temporibus aperiam officiis saepe obcaecati, autem quo laborum cupiditate eaque quia fugit enim unde. Dignissimos quasi labore voluptatibus quaerat ullam voluptate facilis quae itaque ab reiciendis blanditiis provident ducimus distinctio cum fuga aliquid, excepturi odio dicta quo dolorem iste et? Inventore ipsam vitae nobis nesciunt omnis cumque porro deleniti obcaecati nostrum blanditiis accusamus recusandae cupiditate saepe dignissimos explicabo qui, voluptates ullam? Eaque quia, non facilis consequuntur neque quasi velit optio iste, ipsum temporibus at nisi iure voluptates quam nam commodi necessitatibus nobis. Et?
                </p>
                <p className='px-4 py-3'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit earum sed repellat voluptate beatae, commodi ut perferendis. Consequuntur ducimus quam quos perspiciatis? Neque nulla, temporibus voluptatem veritatis perferendis doloribus ea voluptates laudantium reprehenderit minus consectetur dolores amet a, nesciunt facilis suscipit non nostrum corporis ipsam dolorem. Esse, quo ullam nemo adipisci beatae quaerat! Dolores itaque et, tempora libero dicta, tempore quaerat a alias veniam provident cum nulla accusantium excepturi unde rerum eveniet voluptas deserunt. Labore, rerum minima? Quo incidunt doloremque quaerat delectus cumque aut reiciendis quod quasi nihil, dolore repudiandae labore praesentium architecto laudantium pariatur perspiciatis adipisci officia rerum ducimus.
                </p>
                <p className='px-4 py-3'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio dicta quisquam itaque quod pariatur molestias nisi. Quas, quisquam nihil rerum eum autem perspiciatis eligendi repellat quaerat distinctio ullam odit temporibus, atque, excepturi blanditiis esse? Quisquam fuga quas nesciunt quasi nulla incidunt harum excepturi beatae velit? Tenetur repudiandae aspernatur odit unde? Assumenda eos beatae dicta doloremque repudiandae distinctio reiciendis sint soluta est voluptates commodi illum quaerat ad fugit, perferendis nihil laboriosam obcaecati unde aspernatur? Qui deserunt, sequi quia sit eum illo! Cum debitis voluptatem fugit deserunt ab similique numquam dolorum obcaecati reiciendis non nisi fuga, culpa quidem at unde harum ad.
                </p>
            </div>
            <div className='hidden md:relative md:block'>
                <div className="sticky top-24 md:flex flex-col rounded-3xl shadow-2xl border-2 shadow-black/80 border-purple-900/30 p-5">
                    <div className='h-48 border-red-400/50 border-2 rounded-full p-2'>
                        <img className=" h-full p-1" src={Background} alt="" />
                    </div>
                    <div className='flex flex-col py-2 mt-5 divide-y divide-gray-400/50 gap-3 text-center flex-wrap break-all'>
                        <div className='text-3xl text-white font-black font-mono max-w-[12rem]'>
                            {auth.user ? auth.user : "User"}
                        </div>
                        <div className='text-white leading-10'>
                            <p className='text-xl font-bold pt-2 '>
                                Addess
                            </p>
                            <p className=''>
                                Somewhere Adress
                            </p>
                        </div>
                        <div className='text-white leading-10'>
                            <p className='text-xl font-bold pt-2 '>
                                Skill
                            </p>
                            <p className=''>
                                Somewhere Skill
                            </p>
                        </div>
                        <div className='text-white leading-10'>
                            <p className='text-xl font-bold pt-2 '>
                                Work
                            </p>
                            <p className=''>
                                Somewhere Work
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}