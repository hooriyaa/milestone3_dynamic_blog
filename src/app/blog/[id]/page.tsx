import Slugpage from "./slugpage";

export default function BlogPost({ params }: { params: { id: string } }) {
  
  return (
   <Slugpage params={params}/>
  );
}
