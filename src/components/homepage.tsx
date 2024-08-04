
import Link from "next/link"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"

export function Homepage() {
  return (
    <div className="w-full">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container grid max-w-5xl gap-8 px-4 md:px-6 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hi, I'm Zachary White, a junior studying Computer Science at Tufts University. I made this website to share my skills with you, to better understand my abilities as a software engineer. 
              From low level projects in C/C++ to fullstack web applications using ExpressJS and React, I am confident I can can flourish in any engineering environment.
              As a technical lead, researcher, designer, or even EMT, I hope there is something in this portfolio for anyone.
            </p>
            <div className="flex gap-4">
              <Link href="https://github.com/zack-white" className="text-primary hover:underline" prefetch={false}>
                <GithubIcon  />
              </Link>
              <Link href="https://www.linkedin.com/in/zachary-white-455b37274/" className="text-primary hover:underline" prefetch={false}>
                <LinkedinIcon  />
              </Link>
              <Link href="https://x.com/zwhite4_" className="text-primary hover:underline" prefetch={false}>
                <TwitterIcon/>
              </Link>
            </div>
          </div>
          <div className="rounded-lg border bg-background p-4 shadow-sm">
            <img
              src="/pfp.JPG"
              width={1000}
              height={1000}
              alt="Zachary White"
              className="mb-4 rounded-lg object-cover"
            />
            <p>Please feel free to reach out to me for any inquiries about what is displayed here. </p>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid max-w-5xl gap-8 px-4 md:px-6 lg:grid-cols-3">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Projects</h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Check out some of my recent programming projects. Please reach out for any source code/logins to use these tools.
            </p>
          </div>
          <div className="grid gap-6 lg:col-span-2">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border bg-background p-4 shadow-sm transition-all hover:scale-[1.02] hover:shadow-md">
                <img
                  src="/jumbogpt.png"
                  width={240}
                  height={160}
                  alt="Project 1"
                  className="mb-4 rounded-lg object-cover"
                />
                <h3 className="text-lg font-semibold">JumboGPT</h3>
                <p className="text-muted-foreground">A brief description of Project 1.</p>
              </div>
              <div className="rounded-lg border bg-background p-4 shadow-sm transition-all hover:scale-[1.02] hover:shadow-md">
                <img
                  src="/jumbohack.png"
                  width={240}
                  height={160}
                  alt="Project 2"
                  className="mb-4 rounded-lg object-cover"
                />
                <h3 className="text-lg font-semibold">ML Sentiment Analysis</h3>
                <p className="text-muted-foreground">NLP Dashboard using self-trained LLMs</p>
              </div>
              <div className="rounded-lg border bg-background p-4 shadow-sm transition-all hover:scale-[1.02] hover:shadow-md">
                <img
                  src="/gutenberg.jpg"
                  width={240}
                  height={160}
                  alt="Gerp"
                  className="mb-4 rounded-lg object-cover"
                />
                <h3 className="text-lg font-semibold">Gerp</h3>
                <p className="text-muted-foreground">Grep implementation in C</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid max-w-5xl gap-8 px-4 md:px-6">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Resume</h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              View or download my resume to learn more about my skills and experience.
            </p>
          </div>
          <div className="flex justify-center">
            <Tabs defaultValue="view">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="view">View</TabsTrigger>
                <TabsTrigger value="download">Download</TabsTrigger>
              </TabsList>
              <TabsContent value="view">
                <div className="rounded-lg border bg-background p-4 shadow-sm">
                  <iframe src="/resume.pdf" className="w-full h-[600px]" title="Resume" />
                </div>
              </TabsContent>
              <TabsContent value="download">
                <a href="/resume.pdf" download className="w-full">
                  Download Resume
                </a>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </div>
  )
}

function GithubIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}


function LinkedinIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


function TwitterIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}


function XIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
