"use client"
import React from 'react'
import { Heart, ArrowUp } from 'lucide-react'

export default function FooterEnd() {
    return (
        <div className="bg-gray-100 mt-0 pb-12">
            <section className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 px-4 sm:px-6 lg:px-10 py-6 max-w-6xl mx-auto">
                <div className="flex items-center">
                    <h2 className="text-gray-500 text-sm sm:text-base flex items-center gap-2">
                        Made with
                        <span className="inline-flex text-red-600">
                            <Heart className="w-4 h-4" />
                        </span>
                        by Her0x
                    </h2>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-gray-500">
                    <a href="#top" className="flex items-center gap-2 text-sm sm:text-base hover:underline" aria-label="Back to top">
                        Back to top
                        <ArrowUp className="w-4 h-4" />
                    </a>
                    <p className="text-sm">© 2025 Her0x Portfolio. All rights reserved.</p>
                </div>
            </section>
        </div>
    )
}
