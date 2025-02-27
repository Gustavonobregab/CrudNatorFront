import BackButton from "@/components/BackButton";

export default function Profile () {
    return (
        <div className="flex justify-evenly flex-col items-center h-screen">
            <BackButton/>
            <h1 className="text-4xl font-extrabold leading-none tracking-tight text-gray-900 pb-2">Profile</h1>
            <p>This is the Profile page</p>
      </div>
    )
}