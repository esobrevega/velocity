import InfiniteScroll from "../InfiniteScroll"
import { Card, CardContent, CardHeader } from "../ui/card";

const items = [
  {
    content: (
      <Card className="shadow-md rounded-xl">
        <CardHeader>Card 1</CardHeader>
        <CardContent>
          <p>This is inside card 1</p>
        </CardContent>
      </Card>
    )
  },
  {
    content: (
      <Card className="shadow-md rounded-xl">
        <CardHeader>Card 2</CardHeader>
        <CardContent>
          <p>This is inside card 2</p>
        </CardContent>
      </Card>
    )
  },
  {
    content: (
      <Card className="shadow-md rounded-xl">
        <CardHeader>Card 3</CardHeader>
        <CardContent>
          <p>This is inside card 3</p>
        </CardContent>
      </Card>
    )
  }
];


export const TestimonialsScroll = () => {
    return (
        <section className="min-h-screen overflow-hidden">
                <InfiniteScroll
                    items={items}
                    isTilted={true}
                    tiltDirection='left'
                    autoplay={true}
                    autoplaySpeed={0.1}
                    autoplayDirection="down"
                    pauseOnHover={true}
                />
        </section>
    )
}