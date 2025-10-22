"use client"
import React from 'react'
import { Heart } from 'lucide-react'
import { ArrowUp } from 'lucide-react'

export default function FooterEnd() {
    return (
        <div className=" mt-0 pb-20">
            <section className="flex justify-between items-center px-10 py-6">
                <div className="flex flex-row items-center space-x-1 ml-10">
                    <h2 className="flex items-center gap-2 text-gray-500 ml-13">
                        Made with  <span className="inline-flex size-5 text-red-600"><Heart /></span>  by Her0x
                    </h2>
                </div>
                <div className="flex gap-10 text-gray-500">
                    <a href="#top" className="flex items-center gap-2">
                        Back to top
                        <ArrowUp className="size-4" />
                    </a>
                    <p>© 2025 Her0x Portfolio. All rights reserved.</p>
                </div>
            </section>
        </div>
    )
}
