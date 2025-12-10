"use client"

import { useState } from "react"

export function Button() {
    const [clicked, setClicked] = useState<boolean>(false);
    return <button className="bg-amber-400 text-amber-800 rounded-3xl border-2 p-5" onClick={() => setClicked(pre => !pre)}>{clicked ? "Clicked" : "Not yet clicked"}</button>
}