import { AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"

type ErrorPageProps = {
    code?: string
    title?: string
    message?: string
    buttonText?: string
    onButtonClick?: () => void
}

export const ErrorPage = ({
    code = "404",
    title = "Something Went Wrong",
    message = "The page you're looking for doesn’t exist or an unexpected error has occurred.",
    buttonText = "Go Back Home",
    onButtonClick = () => (window.location.href = "/"),
}: ErrorPageProps) => {
    return (
        <section className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
            <div className="text-center space-y-6 max-w-md">

                <h1 className="text-8xl font-extrabold text-[#867343]">{code}</h1>


                <div className="flex justify-center">
                    <div className="p-4 bg-[#867343]/10 rounded-full">
                        <AlertTriangle className="w-10 h-10 text-[#867343]" />
                    </div>
                </div>


                <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
                <p className="text-gray-600">{message}</p>


                <Button
                    onClick={onButtonClick}
                    className="bg-gradient-to-r from-[#867343] to-[#a08c5c] text-white rounded-full px-6 py-2 hover:shadow-lg transition transform hover:scale-105"
                >
                    {buttonText}
                </Button>
            </div>
        </section>
    )
}
