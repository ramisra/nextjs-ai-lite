import Chat from "@/components/chat";
import Notepad from "@/components/notepad";
import Sidebar from "@/components/sidebar";


export default function Home() {
  return (
    <div className= "flex h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col">
      
      <Chat></Chat>
      {/* <div className="w-1/2"><Notepad></Notepad></div> */}
  
    </div>
  )
}
