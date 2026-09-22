import Image from 'next/image';
import React from 'react';
import BannerImg from '../../../public/hero_img.jpg';

const Banner = () => {
    return (
        <section className="py-12 md:py-20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 rounded-3xl bg-[#f5f1e8] px-6 py-10 md:px-12 md:py-14 overflow-hidden">

                    {/* Left Content */}
                    <div className="space-y-6">
                        <p className="text-sm font-semibold uppercase tracking-[3px] text-amber-700">
                            Discover Your Next Read
                        </p>

                        <h2 className="text-4xl md:text-5xl font-bold leading-tight text-slate-900">
                            Books to freshen up
                            <br />
                            your bookshelf
                        </h2>

                        <p className="max-w-md text-slate-600 leading-relaxed">
                            Explore inspiring stories, timeless classics, and
                            exciting new reads curated just for you.
                        </p>

                        <button className="rounded-full bg-amber-500 px-7 py-3 font-semibold text-white transition hover:bg-amber-600 hover:shadow-lg">
                            View The List →
                        </button>
                    </div>

                    {/* Right Image */}
                    <div className="flex justify-center md:justify-end">
                        <div className="relative w-full max-w-md">
                            <Image
                                src={BannerImg}
                                alt="Books"
                                className="rounded-2xl object-cover shadow-2xl"
                                priority
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Banner;