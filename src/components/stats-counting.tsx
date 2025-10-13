import { useEffect, useState, useRef } from "react"
import { Users, Briefcase, TrendingUp, Headset } from "lucide-react"

const stats = [
  { number: 500, suffix: "+", label: "Happy Clients", icon: Users },
  { number: 25, suffix: "+", label: "Years Experience", icon: Briefcase },
  { number: 99, suffix: "%", label: "Success Rate", icon: TrendingUp },
  { number: 24, suffix: "/7", label: "Support", icon: Headset },
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
      className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 lg:gap-20 px-4 sm:px-6 lg:px-10 py-10"
    >
      {stats.map((stat, index) => {
        const Icon = stat.icon
        return (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left space-y-3 sm:space-y-0 sm:space-x-4"
          >
            {/* Icon */}
            <Icon
              className="text-[#867343] flex-shrink-0"
              size={50}
            />

            {/* Text Section */}
            <div className="flex flex-col items-center sm:items-start">
              <CountUp target={stat.number} visible={visible} suffix={stat.suffix} />
              <div className="text-black font-medium text-base sm:text-lg md:text-2xl">
                {stat.label}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

const CountUp = ({
  target,
  visible,
  suffix,
}: {
  target: number
  visible: boolean
  suffix?: string
}) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!visible) {
      setCount(0)
      return
    }

    let start = 0
    const duration = 2000
    const stepTime = Math.max(Math.floor(duration / target), 20)

    const timer = setInterval(() => {
      start += 1
      setCount(start)
      if (start >= target) clearInterval(timer)
    }, stepTime)

    return () => clearInterval(timer)
  }, [visible, target])

  return (
    <div className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#867343] to-[#a08c5c] bg-clip-text text-transparent">
      {count}
      {suffix || ""}
    </div>
  )
}
