"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { HeroDemo } from "./landing/hero/hero-demo";
import { Roboto_Slab } from "next/font/google";
import { cn } from "@/lib/utils";
import { ArrowUpIcon } from "lucide-react";

const font = Roboto_Slab({
    weight: "600",
    subsets: ["latin"]
});

export const LandingHero = () => {
    // const { isSignedIn } = useAuth();

    return (
        <div>
            <div className="px-4 md:px-8 pb-20 flex justify-center items-center flex-wrap gap-4 md:gap-12 lg:gap-16">
                <div className="max-w-md lg:max-w-xl font-bold">
                    <div 
                        className={cn("text-5xl sm:text-6xl md:text-7xl lg:text-8xl \
                        font-extra-bold", font.className)}
                    >
                        <h1>Become</h1>
                        <h1>a singer in</h1>
                        <h1>
                            <span className="text-primary"> 2 minutes</span>.
                        </h1>
                    </div>
                    <div className="text-lg md:text-xl font-normal text-zinc-400 my-4">
                        Clone your voice for free. Then swap out any singer's voice with your own - with the click of a button.
                    </div>
                </div>
                <HeroDemo />
            </div>
            <div className="px-4 md:px-8 pt-4 pb-8 flex flex-col items-center gap-2 md:max-w-lg mx-auto">
            <div className="text-2xl text-center">Try it yourself - for free!</div>
            {true ?
                <Link href="/dashboard" className="w-full" passHref={true}>
                    <Button 
                        variant="default"
                        className="text-xl md:text-3xl p-8 w-full
                        rounded-sm font-normal border-2 border-black/100
                        hover:scale-105 transition shadow-xl"
                    >
                        Get Started
                    </Button>
                </Link>
                :
                
                <Button 
                    variant="default"
                    className="text-xl md:text-3xl p-8 w-full
                    rounded-sm font-normal border-2 border-black/100
                    hover:scale-105 transition shadow-xl"
                >
                    Get Started
                </Button>
                }
                <div className="flex justify-center gap-2">
                    <ArrowUpIcon fill="black" />
                    <ArrowUpIcon fill="black" />
                    <ArrowUpIcon fill="black" />
                    <ArrowUpIcon fill="black" />
                    <ArrowUpIcon fill="black" />
                </div>
                <div className="pt-16">
                    <a href="https://www.producthunt.com/posts/instant-singer?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-instant&#0045;singer" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=418996&theme=light" alt="Instant&#0032;Singer - Convert&#0032;any&#0032;song&#0032;into&#0032;your&#0032;own&#0032;voice&#0032;with&#0032;the&#0032;power&#0032;of&#0032;AI | Product Hunt" style={{"width": "250px", "height": "54px"}} width="250" height="54" /></a>
                </div>
            </div>
        </div>
    )
}