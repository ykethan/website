import Hero from "@/app/_components/Hero"
import Logos from "@/app/_components/Logos"
import CreateContent from "@/app/_components/CreateContent"
import Post from "@/app/_components/Post"
import Newsletter from "@/app/_components/Newsletter"
import { fetchMostRecentPosts } from "@/app/_actions/actions"

export const dynamic = 'force-dynamic'

export default async function Home() {
  const posts = await fetchMostRecentPosts(3);
  return (
    <>
      <Hero />
      <Logos />
      <div className="relative bg-gray-50 pt-16 pb-4 px-4 sm:px-6 lg:pt-24 lg:pb-6 lg:px-8">
        <div className="absolute inset-0">
          <div className="bg-white h-1/3 sm:h-2/3"></div>
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
              Recent Community Blog Posts
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl leading-7 text-gray-500 sm:mt-4">
              What&apos;s being talked about in the CDK ecosystem.{" "}
              <a className="italic underline" href="/posts">
                More...
              </a>
            </p>
          </div>
          <div className="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
            {posts.map((post) => (
              <Post key={post.title} post={post} />
            ))}
          </div>
        </div>
      </div>
      <CreateContent />
      <Newsletter />
    </>
  )
}