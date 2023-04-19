import Link from 'next/link'
import { useRouter } from 'next/router'
import { getMenu } from '../../data/getMenu'


export function Nav()
{
    const router = useRouter()
    const nav = getMenu()
    const styles = (link) => router.asPath === link ? 
        'text-xl text-red-500 hover:text-red-400' : 
        'text-xl text-gray-50 hover:text-red-500'

    return (
        <div className="bg-gray-900 py-4 hidden lg:block">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between w-full">
                    {nav.map((item, i) => (
                        <Link key={i} href={item.link} className={styles(item.link)}>
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}