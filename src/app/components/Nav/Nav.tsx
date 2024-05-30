type NavProps = {
    Status:string
}


export default function Nav(props: NavProps){

    return(
        <nav className="bg-[#CCCCCC] p-2 ">
            <div className="flex justify-end mr-8 font-bold">
                <h1>{props.Status}</h1>
            </div>
        </nav>
    )
}