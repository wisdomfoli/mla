import {RssIcon, Search} from 'lucide-react';
import Breadcrumbs from "../../components/Breadcrumbs.tsx";
import blog_1 from '../../assets/images/J1/DSC_2209.jpg'
import blog_2 from '../../assets/images/J1/DSC_2344.jpg'

interface BlogPost {
    id: number;
    title: string;
    date: string;
    category: string;
    excerpt: string;
    image: string;
}

const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: "Harley's Story: Supporting My Mom Through Breast Cancer as a Young Caregiver",
        date: "APRIL 8, 2025",
        category: "PERSONAL STORIES",
        excerpt: "At 25, Harley Stuebgen never expected to become a caregiver for her mom after a breast cancer diagnosis. But when her mother, Kim, was diagnosed in 2023, Harley stepped into the role of caregiver. From standing by her mother through surgery to organizing a fundraiser in her honor, Harley's journey highlights the powerful bond between mother and daughter and the strength found within a supportive community.",
        image: blog_1
    },
    {
        id: 2,
        title: "Kira's Story: Taking a Step Back",
        date: "APRIL 4, 2025",
        category: "PERSONAL STORIES",
        excerpt: "Months after having twins, Kira was shocked to learn she had stage 2 triple positive breast cancer. Kira and her husband, already parents to a son, welcomed the twins in July 2019. \"In October, I discovered a lump, but initially I thought it was a blockage in the breast,\" Kira said. She started looking for ideas...",
        image: blog_2
    }
];

function Page() {

    return (
        <>
            {/*<Banner backgroundImage={banner} title="" description="" />*/}
            <div
                className={`px-4 py-8 relative h-[180px] overflow-hidden flex flex-col items-center justify-center bg-pink-800`}
            >

                <div className="relative z-10 text-center">
                    <h1 className="text-3xl font-thin mt-4 text-gray-50">Medstudents Leaders Association</h1>
                    <p className="text-xl mt-2 text-white font-semibold">Stories about breast cancer that can inspire and inform</p>
                </div>
            </div>
            {/* Breadcrumb */}
            <div className="bg-gray-100 py-2 px-4 md:px-8 lg:px-20">
                <Breadcrumbs title={'Blog'}/>
            </div>
            <div className="bg-white px-4 md:px-16">
                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="flex justify-between items-center mb-8 border-b border-gray-200 pb-4">
                        <button className="text-[#EA3A8A] font-semibold hover:text-[#EA3A8A]/80">
                            All Posts ▾
                        </button>
                        <a href="#" className="flex items-center text-[#EA3A8A] hover:text-[#EA3A8A]/80">
                            <RssIcon className="h-5 w-5 mr-2" />
                            RSS
                        </a>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2">
                            {/* Blog Posts */}
                            <div className="space-y-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
                                {blogPosts.map((post) => (
                                    <article key={post.id} className="border-b border-gray-200 pb-16">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full aspect-[16/9] object-cover mb-6"
                                        />
                                        <div className="space-y-4">
                                            <div className="flex items-center space-x-2 text-sm">
                                                <span className="text-gray-500">{post.date}</span>
                                                <span className="text-gray-300">•</span>
                                                <span className="text-[#EA3A8A] font-medium">{post.category}</span>
                                            </div>
                                            <h2 className="text-2xl font-bold text-gray-900 hover:text-[#EA3A8A] transition-colors">
                                                <a href="#">{post.title}</a>
                                            </h2>
                                            <p className="text-gray-600 leading-relaxed">
                                                {post.excerpt}
                                            </p>
                                            <a
                                                href="#"
                                                className="inline-block text-[#EA3A8A] hover:text-[#EA3A8A]/80 font-medium mt-4"
                                            >
                                                Read more
                                            </a>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1 space-y-8">
                            <div className=" p-6 rounded-lg">
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Search Blog"
                                        className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EA3A8A] focus:border-transparent"
                                    />
                                    <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                        <Search className="h-5 w-5 text-gray-400" />
                                    </button>
                                </div>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-gray-900 mb-6">News & Media</h3>
                                <div className="space-y-6">
                                    {[1, 2, 3].map((item) => (
                                        <div key={item} className="space-y-2">
                                            <h4 className="font-medium text-gray-900 hover:text-[#EA3A8A] transition-colors">
                                                <a href="#">Minnesota Rallies to Fund Life-Saving Research and Patient Care</a>
                                            </h4>
                                            <p className="text-sm text-gray-500">April {item}, 2025</p>
                                        </div>
                                    ))}
                                    <a href="#" className="inline-block text-[#EA3A8A] hover:text-[#EA3A8A]/80 font-medium">
                                        VIEW ALL
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}

export default Page;