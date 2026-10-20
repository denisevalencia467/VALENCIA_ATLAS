import {Link} from "react-router-dom";

export default function Navbar(){
    return(
        <nav className = "bg-slate-950 px-6 py-4 text-white">
            <div className="flex items-center justify-between">
                <Link to="/" className="text-xl font-bold">
                    Faculty Management
                </Link>
                <div className="flex space-x-4">
                    <Link to="/students" className="hover:text-red-400">
                    Students
                    </Link>
                    <Link to="/faculty" className="hover:text-red-400">
                    Faculty
                    </Link>
                </div>
            </div>
        </nav>
    );
}