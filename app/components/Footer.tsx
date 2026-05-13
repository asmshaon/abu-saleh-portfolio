import { MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-dark-900 border-t border-white/5 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} <strong>asmshaon</strong>. All rights reserved.</div>
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <MapPin className="w-4 h-4" />
                        Bangladesh, GMT+6
                    </div>
                </div>
            </div>
        </footer>
    );
}