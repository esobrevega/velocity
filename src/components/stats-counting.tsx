import { useEffect, useState, useRef } from "react"

const stats = [
  { number: 500, suffix: "+", label: "Happy Clients" },
  { number: 15, suffix: "+", label: "Years Experience" },
  { number: 99, suffix: "%", label: "Success Rate" },
  { number: 24, suffix: "/7", label: "Support" }
]

export const StatsCount = () => {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true)
        } else {
          setVisible(false)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="grid grid-cols-2 md:grid-cols-4 gap-10 place-items-center"
    >
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <CountUp target={stat.number} visible={visible} suffix={stat.suffix} />
          <div className="text-black font-medium text-xl md:text-2xl">{stat.label}</div>
        </div>
      ))}
    </div>
  )
}

const CountUp = ({
  target,
  visible,
  suffix
}: {
  target: number
  visible: boolean
  suffix?: string
}) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!visible) {
      setCount(0) // reset when not visible
      return
    }

    let start = 0
    const duration = 2000
    const stepTime = Math.max(Math.floor(duration / target), 20)

    const timer = setInterval(() => {
      start += 1
      setCount(start)
      if (start >= target) {
        clearInterval(timer)
      }
    }, stepTime)

    return () => clearInterval(timer)
  }, [visible, target])

  return (
    <div className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#867343] to-[#a08c5c] bg-clip-text text-transparent">
      {count}
      {suffix || ""}
    </div>
  )
}
